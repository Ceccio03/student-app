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

const class1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

// console.log(document);
// console.log(document.getElementById('main-container'));

// const mainContainer = document.getElementById('main-container');
// const h2Element = document.createElement('h2');
// const textNode = document.createTextNode(student1.toString());

// h2Element.appendChild(textNode);
// mainContainer.appendChild(h2Element);

function renderPage() {
    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < class1.studentsArray.length; i++) {
        if (i % 2 === 0) {
            const h3Element = document.createElement('h3');
            const node = document.createTextNode('Coppia ' + (i / 2 + 1) + ': ');

            h3Element.appendChild(node);
            mainContainer.appendChild(h3Element);
        }
        const student = class1.studentsArray[i];
        const pElement = document.createElement('p');

        pElement.classList.add('student-p');

        const textNode = document.createTextNode(student.toString());

        pElement.appendChild(textNode);
        mainContainer.appendChild(pElement);
    }
}
renderPage();

function shuffle() {
    console.log('Sto rimescolando');

    class1.shuffleStudents();
    
    renderPage();
}