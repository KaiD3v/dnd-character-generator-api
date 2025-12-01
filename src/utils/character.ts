import { Attributes } from "./character-attr";

interface Character {
  // Identidade
  name: string;
  level: number;
  class: string;

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
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };

  // Proficiências
  proficiencies: {
    savingThrows: string[];
    skills: string[];
    weapons: string[];
    armors: string[];
    tools: string[];
    languages: string[];
  };

  // Inventário e equipamentos
  equipment: {
    armor?: string;
    weapons: string[];
    items: string[];
    gold: number;
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
