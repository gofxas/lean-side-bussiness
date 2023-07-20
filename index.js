var Koa = require("koa");
const static_ = require('koa-static');
const path = require("path");
var app = new Koa();
var port = 6800;

app.use(static_(
  path.join(__dirname, './docs/')
))

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
  // Access-Control-Allow-Credentials 设置为true会和 Access-Control-Allow-Origin":"*" 冲突的
  ctx.set("Access-Control-Allow-Credentials", false);
  // 这里获取 origin 请求头 而不是用 *
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,Authorization,token"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,HEADER");
});

app.listen(port);
console.log("OK");
