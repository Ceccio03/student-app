class Classroom {
    constructor(studentsArray = []) {
        this.studentsArray = studentsArray;
    }

    addStudent(student) {
        this.studentsArray.push(student);
    }

    getSquads(squadMembers) {
        let acc = '';

        for (let i = 0; i < this.studentsArray.length; i++) {
            const student = this.studentsArray[i];

            if (i % squadMembers === 0) {
                acc += 'Squadra ' + (i / squadMembers + 1) + ': ';
            }
            acc += student.toString();

            if (i % squadMembers === squadMembers - 1) {
                acc += '\n';
            } else {
                acc += ' e ';
            }
        }
        return acc;
    }

    shuffleStudents() {
        const tempArray = [];
        const originalLength = this.studentsArray.length;

        for (let i = 0; i < originalLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.studentsArray.length);
            const student = this.studentsArray[randomIndex];

            tempArray.push(student);
            this.studentsArray.splice(randomIndex, 1);
        }
        this.studentsArray = tempArray;
    }
}