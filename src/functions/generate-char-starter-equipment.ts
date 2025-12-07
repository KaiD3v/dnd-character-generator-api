import { dndApi } from "../utils/dnd-api";

interface EquipmentRef {
    index: string;
    name: string;
    url: string;
}

interface CountedReferenceOption {
    option_type: "counted_reference";
    count: number;
    of: EquipmentRef;
}

interface ChoiceOption {
    option_type: "choice";
    choice: {
        desc: string;
        choose: number;
        type: "equipment";
        from: any; // equipamento por categoria, etc.
    };
}

interface EquipmentOptionArray {
    option_set_type: "options_array";
    options: (CountedReferenceOption | ChoiceOption)[];
}

interface StartingEquipmentOption {
    desc: string;
    choose: number;
    type: "equipment";
    from: EquipmentOptionArray;
}

interface StartingEquipmentItem {
    equipment: EquipmentRef;
    quantity: number;
}

type StarterEquipment = StartingEquipmentItem[];


function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}


export async function generateCharStarterEquipment(className: string) {
    const url = `${dndApi}/classes/${className.toLowerCase()}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const fixedEquipment: StarterEquipment = data.starting_equipment || [];
        const options: StartingEquipmentOption[] = data.starting_equipment_options || [];

        const finalEquipment: StarterEquipment = [...fixedEquipment];

        // Percorre as opções opcionais e sorteia uma de cada
        for (const opt of options) {
            const optionArray = opt.from.options;

            // Escolhe um item aleatório no grupo
            const chosen = pickRandom(optionArray);

            if (chosen.option_type === "counted_reference") {
                // Exemplo: 2 handaxes
                finalEquipment.push({
                    equipment: chosen.of,
                    quantity: chosen.count
                });
            }

            else if (chosen.option_type === "choice") {
                // Exemplo: qualquer arma marcial da categoria
                const catUrl = `${dndApi}${chosen.choice.from.equipment_category.url}`;

                try {
                    const categoryResponse = await fetch(catUrl);
                    const categoryData = await categoryResponse.json();

                    const equipmentList: EquipmentRef[] = categoryData.equipment;

                    // Escolhe aleatoriamente um item da categoria
                    const randomEquip = pickRandom(equipmentList);

                    finalEquipment.push({
                        equipment: randomEquip,
                        quantity: 1
                    });

                } catch (error) {
                    console.error("Erro buscando categoria de equipamento:", error);
                }
            }
        }

        return finalEquipment;

    } catch (error) {
        console.error("Erro buscando equipamento inicial:", error);
        return [];
    }
}
