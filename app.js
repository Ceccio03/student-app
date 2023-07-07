const student1 = new Student('Cesare', 'Falzone');
const student2 = new Student('Manuela', 'Ariotti');
const student3 = new Student('Damiano', 'Di Lionardo');
const student4 = new Student('Isabella', 'Ottonello');
const student5 = new Student('Stefano', 'Florio');
const student6 = new Student('Bryan', 'Rojas');
const student7 = new Student('Stefania', 'Ghergut');
const student8 = new Student('Francesca', 'Ercolani');
const student9 = new Student('Luca', 'Verduci');
const student10 = new Student('Ares', 'Fiumicelli');

console.log(student1.toString());

const class1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

console.log(class1.getSquads())