export function generateCharHp(dndClass: { className: string; level: number }, conModifier: number): number {
    let baseHpPerLevel: number;

        if(dndClass.className === "Barbarian") {
            baseHpPerLevel = 12;
        }
        else if(dndClass.className === "Bard" || dndClass.className === "Cleric" || dndClass.className === "Druid") {
            baseHpPerLevel = 8;
        }
        else if(dndClass.className === "Fighter" || dndClass.className === "Monk" || dndClass.className === "Paladin" || dndClass.className === "Ranger") {
            baseHpPerLevel = 10;
        }

        else { // Rogue, Sorcerer, Warlock, Wizard
            baseHpPerLevel = 6;
        }

    const totalHp = (baseHpPerLevel + conModifier) + ((baseHpPerLevel / 2 + 1 + conModifier) * (dndClass.level - 1));
    
    return totalHp;
    
}