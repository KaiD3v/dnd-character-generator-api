import { StarterEquipment } from "../functions/generate-char-starter-equipment";
import { Attributes } from "./character-attr";
import { NewClass } from "./character-classes";

interface Character {
  // Identidade
  name: string;
  level: number;
  class: NewClass;
  gender: string;
  alignment: string;
  age: number;

  // Vida e combate
  hp: number;
  ac: number;
  initiative: number; // baseado em DEX

  // Raça e sub-raça
  race: {
    name: string;
    traits: string[];
    subrace?: {
      name: string;
      traits: string[];
    };
  };

  // Background
  background: {
    name: string;
    traits: {
      personality: string;
      ideal: string;
      bond: string;
      flaw: string;
    };
  };

  // Atributos principais
  attributes: Attributes;

  // Modificadores (calculados)
  modifiers: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  // Proficiências
  proficiencies?: {
    savingThrows: string[];
    skills: string[];
    weapons: string[];
    armors: string[];
    tools: string[];
    languages: string[];
  };

  // Inventário e equipamentos
  equipment: {
    gold: number;
    items: StarterEquipment;
};


  // Magias
  spells?: {
    spellcastingAbility: string;
    spellSaveDC: number;
    spellAttackBonus: number;
    spellSlots: {
      [level: number]: number; // ex.: { 1: 2, 2: 0 }
    };
    knownSpells: string[];
    preparedSpells?: string[];
  };
}

export type { Character };
