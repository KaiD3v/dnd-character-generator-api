import fastify = require("fastify");

const app = fastify();

app.get('/', async () => {
  return { message: 'Hello Fastify + TS!' };
});

app.listen({ port: 3000 }).then(() => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});