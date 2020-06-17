const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const rand = Math.floor(Math.random() * 10000)
  ctx.body = `Hello World: ${rand}`;
});

app.listen(3000);
console.log('listening on port 3000');