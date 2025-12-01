import Fastify from 'fastify';
import { NewClass } from './utils/character-classes';
import { generateCharController } from './controller/generate-char.service';
import { generateCharHp } from './functions/generate-char-hp.function';
import { generateCharName } from './functions/generate-char-name.function';
import { Character } from './utils/character';

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

console.log(generateCharName({race: 'Gnome', gender: 'male'}));

// console.log(`class hp:`, generateCharHp({ className: "Barbarian", level: 5 }, 4));