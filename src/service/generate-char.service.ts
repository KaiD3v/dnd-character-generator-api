import { generateCharHp } from "../functions/generate-char-hp.function";
import { generateCharName } from "../functions/generate-char-name.function";
import { generateCharStarterEquipment } from "../functions/generate-char-starter-equipment";
import { genereateCharacterModifiers } from "../functions/generate-char.mod";
import { generateClassBaseAttributes } from "../functions/generate-class-attr.function";
import { Character } from "../utils/character";
import { Attributes } from "../utils/character-attr";
import { NewClass } from "../utils/character-classes";

interface CharacterBody{
    race: string;
    gender: string; 
    level: number;
    charClass: NewClass;
}

export class CharacterService { 
    generateCharacterClassAttributes(dndClass: NewClass): NewClass {
        let myClass = dndClass;
        generateClassBaseAttributes(dndClass);
        return dndClass;
    }

    generateNewCharacterModifiers(attr: Attributes){
        const characterModifiers = genereateCharacterModifiers(attr)

        return characterModifiers;
    }

    generateNewCharacterHp(dndClass: string, level: number, conMod: number): number {
        
        const hp = generateCharHp({className: dndClass, level: level}, conMod);


        return hp;
    }

    generateNewCharacterName(race: string, gender: string): string {
        // Importa a função localmente para evitar ciclos de dependência
        const name = generateCharName({ race, gender}) ;
        
        return name;
    }

    async generateNewCharacterStarterEquipment(className: string) {
    const equipment = await generateCharStarterEquipment(className);
    return equipment;
}


    async generateNewCharacter({ race, gender, level, charClass }: CharacterBody) {
    const charAttributes = this.generateCharacterClassAttributes(charClass).baseAttributes!;
    const charName = this.generateNewCharacterName(race, gender);
    const charModifiers = this.generateNewCharacterModifiers(charAttributes);
    const charHp = this.generateNewCharacterHp(charClass.className, level, charModifiers.constitution);
    const charEquipment = await this.generateNewCharacterStarterEquipment(charClass.className);

    const character: Character = {
        name: charName,
        age: 10,
        ac: 10,
        level,
        alignment: "Neutral",
        attributes: charAttributes,
        modifiers: charModifiers,
        hp: charHp,
        equipment: {
            gold: 0,
            items: charEquipment, // Agora é StarterEquipment corretamente
        },
        race: {
            name: race,
            traits: ["Trait 1", "Trait 2", "That is just a test."],
        },
        gender,
        class: charClass,
        initiative: 0,
        background: {
            name: "",
            traits: {
                personality: "",
                ideal: "",
                bond: "",
                flaw: ""
            }
        }
    };

    return character;
}

} 