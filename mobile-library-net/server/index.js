const Koa = require('koa')
const router = require('./router');
const cors = require('koa2-cors');

var app  = new Koa();

app.use(
    cors({
        origin: function(ctx) { 
            return 'http://localhost:9527';
        },
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    })
);


app.use(router.routes(), router.allowedMethods())

app.listen('9529', ()=>{
    console.log('markdown server listen on: 9529')
});