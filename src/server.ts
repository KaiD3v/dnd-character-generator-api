import Fastify from 'fastify';
import { generateCharController } from './controller/generate-char.service';
import { generateCharName } from './functions/generate-char-name.function';
import cors from '@fastify/cors';

// Example plugin


async function buildServer() {
  const fastify = Fastify({ logger: false });

  // Register plugin
  fastify.register(generateCharController);
  fastify.register(cors, {
    origin: '*'
  })

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

console.log(generateCharName({race: 'Human', gender: 'male'}));

const teste = {
  strength: 15,
  dexterity: 14,
  constitution: 13,
  intelligence: 12,
  wisdom: 10,
  charisma: 8
}

// console.log(genereateCharacterModifiers(teste));

// console.log(`class hp:`, generateCharHp({ className: "Barbarian", level: 1 }, 2));

// generateCharStarterEquipment("wizard").then(e => console.log(e));