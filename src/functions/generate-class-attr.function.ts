import type { Attributes } from '../utils/character-attr.ts';
import type { NewClass } from './../utils/character-classes.ts';

const classList = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
]

export function generateClassBaseAttributes(dndClass: NewClass) {

    let newClassAttributes = {} as Attributes;

    if (!classList.includes(dndClass.className)) {
    throw new Error("Classe inválida");
    }

    if(dndClass.className === "Barbarian") {
        dndClass.baseAttributes = {
            strength: 15,
            dexterity: 12,
            constitution: 14,
            intelligence: 8,
            wisdom: 10,
            charisma: 8
        }
    }

    if(dndClass.className === "Bard") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 14,
            constitution: 10,
            intelligence: 12,
            wisdom: 10,
            charisma: 15
        }
    }

    if(dndClass.className === "Cleric") {
        dndClass.baseAttributes = {
            strength: 12,
            dexterity: 10,
            constitution: 14,
            intelligence: 10,
            wisdom: 15,
            charisma: 8
        }
    }

    if(dndClass.className === "Druid") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 12,
            constitution: 14,
            intelligence: 10,
            wisdom: 15,
            charisma: 10
        }
    }

    if(dndClass.className === "Fighter") {
        dndClass.baseAttributes = {
            strength: 15,
            dexterity: 12,
            constitution: 14,
            intelligence: 10,
            wisdom: 10,
            charisma: 8
        }
    }

    if(dndClass.className === "Monk") {
        dndClass.baseAttributes = {
            strength: 12,
            dexterity: 15,
            constitution: 14,
            intelligence: 10,
            wisdom: 12,
            charisma: 8
        }
    }

    if(dndClass.className === "Paladin") {
        dndClass.baseAttributes = {
            strength: 15,
            dexterity: 10,
            constitution: 14,
            intelligence: 8,
            wisdom: 12,
            charisma: 15
        }
    }

    if(dndClass.className === "Ranger") {
        dndClass.baseAttributes = {
            strength: 12,
            dexterity: 15,
            constitution: 14,
            intelligence: 10,
            wisdom: 12,
            charisma: 8
        }
    }

    if(dndClass.className === "Rogue") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 15,
            constitution: 12,
            intelligence: 14,
            wisdom: 10,
            charisma: 10
        }
    }

    if(dndClass.className === "Sorcerer") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 12,
            constitution: 14,
            intelligence: 10,
            wisdom: 10,
            charisma: 15
        }
    }

    if(dndClass.className === "Warlock") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 12,
            constitution: 14,
            intelligence: 10,
            wisdom: 10,
            charisma: 15
        }
    }

    if(dndClass.className === "Wizard") {
        dndClass.baseAttributes = {
            strength: 8,
            dexterity: 12,
            constitution: 14,
            intelligence: 15,
            wisdom: 10,
            charisma: 10
        }
    }

    newClassAttributes = dndClass.baseAttributes!;

    return newClassAttributes; 
}