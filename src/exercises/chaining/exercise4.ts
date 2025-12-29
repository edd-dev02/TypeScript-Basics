/*
🧩 Ejercicio 4 (avanzado): Optional chaining en funciones opcionales

Instrucciones:

    Crea una interface Logger con:

        log?(): void (método opcional)
        message (string)

    Crea una función executeLogger(logger: Logger):

        Usa logger.log?.() para ejecutar el método solo si existe.
        Si no existe, imprime "Logger sin método".

    📌 Extra:
    Crea dos instancias: una con log() y otra sin.
*/

interface Logger {
    log?: () => void;
    message: string;
}

function executeLogger(logger: Logger): void {

    logger.log ? logger.log() : console.log("Logger sin método");

}

const logger: Logger = {
    log()
     {
        alert("Este logger si tiene un método");
    },
    message: "Log executed"
}

executeLogger(logger);