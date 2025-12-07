// TO-DO:
// Fazer uma função que gere os modificadores de habilidade baseado nos atributos principais

import { Attributes } from "../utils/character-attr";

export function genereateCharacterModifiers(attributes: Attributes) {
  return {
    strength: Math.floor((attributes.strength - 10) / 2),
    dexterity: Math.floor((attributes.dexterity - 10) / 2),
    constitution: Math.floor((attributes.constitution - 10) / 2),
    intelligence: Math.floor((attributes.intelligence - 10) / 2),
    wisdom: Math.floor((attributes.wisdom - 10) / 2),
    charisma: Math.floor((attributes.charisma - 10) / 2),
  };
}