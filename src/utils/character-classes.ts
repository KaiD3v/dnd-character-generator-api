import type { Attributes } from "./character-attr.ts"

export interface NewClass {
    className: string,
    baseAttributes?: Attributes
}

export const classes: NewClass[] = [
    {
        className: "Barbarian",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Bard",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Cleric",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Druid",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Fighter",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Monk",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Paladin",
        baseAttributes: {} as Attributes | undefined   
    },
    {
        className: "Ranger",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Rogue",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Sorcerer",
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Warlock",  
        baseAttributes: {} as Attributes | undefined
    },
    {
        className: "Wizard",
        baseAttributes: {} as Attributes | undefined
    }
]