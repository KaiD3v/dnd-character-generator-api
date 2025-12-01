import { generateClassBaseAttributes } from "../functions/generate-class-attr.function";
import { NewClass } from "../utils/character-classes";

export class UserService { 
    generateCharacterClass(dndClass: NewClass): NewClass {
        generateClassBaseAttributes(dndClass);
        return dndClass;
    }
} 