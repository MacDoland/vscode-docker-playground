const Koa = require('koa');
const app = new Koa();

app.use(async context => {
  const rand = Math.floor(Math.random() * 10000)
  context.body = `Hello World: ${rand}`;
});

app.listen(3000);
console.log('listening on port 3000');