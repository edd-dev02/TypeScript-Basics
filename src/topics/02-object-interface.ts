// Arreglo de strings
const skills: string[] = ["Bash", "Counter", "Healing"];

// Interfaz para representar un objeto
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Valor opcional puede ser string o undefined
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter"],
}

strider.hometown = "Rivendell";

console.table(strider);

export {}