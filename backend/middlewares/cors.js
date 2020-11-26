const corsHandler = {
    origin:ctx =>{
        if(ctx.url === '/text'){
            // 配置不运行跨域的接口地址
            return false
        }

        return "*"
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}