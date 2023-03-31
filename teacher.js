// Creiamo la classe teacher:


class Teacher extends Person {

    constructor(name, surname, yob, students) {
        super(name, surname, yob);
        this.students = students;
    };

    findBestStudent () {

        const students = this.students;
        let bestStudent = students[0];
        for (let i = 1; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean();
            let actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent;
            };
        };

        return bestStudent;

    };

    toString () {

        return super.toString() + '\n' +
`MIGLIOR STUDENTE: ${this.findBestStudent().name} ${this.findBestStudent().surname}`;

    };

};