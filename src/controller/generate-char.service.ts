import { FastifyInstance } from "fastify";
import { CharacterService } from "../service/generate-char.service";

export async function generateCharController(fastify: FastifyInstance) {
    const userService = new CharacterService();

    fastify.post('/generate-character', async (request, reply) => {
        try {
            const dndClass = request.body as { className: string };
            const characterClass = userService.generateCharacterClassAttributes(dndClass);

            reply.send(characterClass);
        } catch (error) {
            reply.status(400).send({ error: (error as Error).message });
        }
    });
}