interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2016
    }
}

// Al momento de desestructurar, tener cuidado de nombrar variables identicas, en este caso, "anotherSong" toma el valor del objeto
const song = "New Song";
const {
    audioVolume: volume,
    songDuration: duration,
    song: anotherSong,
    details: { author }

} = audioPlayer;

// console.log(`Cancion: ${song} - Duración: ${duration} - Autor: ${author}`);

// Desestructuración de arreglos

const [p1, p2, p3 = "Yo"]: string[] = ["Goku", "Vegeta", "Trunks"]; // p3 tiene un valor por defecto en caso de que no exista

console.log("Personaje 3: ", p3);

export { };