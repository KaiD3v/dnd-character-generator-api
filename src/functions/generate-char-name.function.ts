import raceNames from "../json/races-names.json";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateCharName({
  race,
  gender
}: {
  race: string;
  gender: string;
}): string {
  if (!race || !gender) {
    throw new Error("Raça ou gênero não fornecidos");
  }

  // Busca a raça no JSON
  const raceData = raceNames.races.find(
    (r: any) => r.race.toLowerCase() === race.toLowerCase()
  );

  if (!raceData) {
    throw new Error(`Raça '${race}' não encontrada no JSON de nomes`);
  }

  // Define lista conforme gender
  let nameList: string[];

  if (gender.toLowerCase() === "male") {
    nameList = raceData.names.male;
  } else if (gender.toLowerCase() === "female") {
    nameList = raceData.names.female;
  } else {
    throw new Error("Gênero inválido. Use 'male' ou 'female'.");
  }

  // Nome aleatório
  const charName = getRandomElement(nameList);

  return charName;
}
