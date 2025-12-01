import Fastify from 'fastify';
import { NewClass } from './utils/character-classes';
import { generateCharController } from './controller/generate-char.service';

// Example plugin


async function buildServer() {
  const fastify = Fastify({ logger: false });

  // Register plugin
  fastify.register(generateCharController);

  return fastify;
}

async function start() {
  try {
    const app = await buildServer();
    await app.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();

// const myNewClass: NewClass = {className: "Bard"};
// checkClassBaseAttributes(myNewClass);

// console.log(myNewClass);