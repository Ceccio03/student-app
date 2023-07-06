const student1 = new Student('Cesare', 'Falzone', 'Front-End');
const student2 = new Student('Manuela', 'Ariotti', 'Front-End');
const student3 = new Student('Damiano', 'Di Lionardo', 'Front-End');
const student4 = new Student('Isabella', 'Ottonello', 'Front-End');
const student5 = new Student('Stefano', 'Florio', 'Front-End');
const student6 = new Student('Bryan', 'Rojas', 'Front-End');
const student7 = new Student('Stefania', '', 'Front-End');
const student8 = new Student('Francesca', '', 'Front-End');
const student9 = new Student('Luca', 'Verduci', 'Front-End');
const student10 = new Student('Ares', '', 'Front-End');

const studentsArray = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

console.log(studentsArray);
console.log(studentsArray.toString());

const random = Math.floor(Math.random() * studentsArray.length) + Math.floor(Math.random() * studentsArray.length);
console.log(random, studentsArray[random]);
console.log(studentsArray.randomizer);