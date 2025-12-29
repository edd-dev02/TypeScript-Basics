/*
🧩 Ejercicio 2: Optional chaining + arrays opcionales

Instrucciones:

    Crea una interface Course con:

        name (string)
        students? (string[] opcional)

    Escribe una función countStudents(course: Course) que:

        Use ?.length para calcular cuántos estudiantes tiene.
        Si el arreglo no existe, muestra "Curso vacío".

    📌 Extra:
    Imprime el primer estudiante usando:
    course.students?.[0] ?? "No hay estudiantes"
*/

interface Course {
    name: string;
    students?: string[];
}

function countStudents(course: Course): number | string {

    return course.students?.length || "Curso vacío";

}

const course1: Course = {
    name: "Programación estructutada",
    students: ["Eduardo", "Cesar", "Damián"]
}

const course2: Course = {
    name: "Ciberseguridad",
}

console.log(countStudents(course1));
console.log(countStudents(course2));

console.log(course2.students?.[0] ?? `No hay estudiantes para el curso ${course2.name}`);

