import { FastifyInstance } from "fastify";
import { CharacterService } from "../service/generate-char.service";
import { NewClass } from "../utils/character-classes";

interface CharacterBody{
    race: string;
    gender: string; 
    level: number;
    charClass: NewClass;
}

export async function generateCharController(fastify: FastifyInstance) {
    const userService = new CharacterService();

    fastify.post('/generate-character', async (request, reply) => {
        try {
            const {race, gender, level, charClass} = request.body as CharacterBody;
            const newCharacter = await userService.generateNewCharacter({ race, gender, level, charClass });
            reply.send(newCharacter);
        } catch (error) {
            reply.status(400).send({ error: (error as Error).message });
        }
    });
}