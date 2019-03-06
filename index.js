const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const app = new Koa();
const router = new Router();

//异步函数
const getData = (data)=>{
    return `koa ${data}`;
}
//异步get参数
router.get('/index',async (ctx,next)=>{
    let result = null;
    result = await getData('world');
    ctx.body = result;
    console.log(result)
});

//静态文件，类似express的static
app.use(static(__dirname+'/piblic/'));

//激活路由
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000,
      IP   = process.env.IP || 'localhost';

app.listen(PORT,IP,()=>{
    console.log(`server is running on ${IP}:${PORT}`)
})