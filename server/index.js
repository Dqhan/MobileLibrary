const Koa = require('koa')
const static = require('koa-static');
const path = require('path');

var app  = new Koa();

app.use(static(path.join(__dirname, '../build/')));

app.listen('9528', ()=>{
    console.log('markdown server listen on: 9528')
});