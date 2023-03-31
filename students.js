// LE CLASSI!!!


class Student extends Person {

    constructor (name, surname, yob, grades = []) { // array vuoto di default a grades
        super(name, surname, yob);
        this._grades = grades;
    };

    calculateMean () {

        const grades = this._grades;
        if (grades.length === 0) {
            return -1;
        };
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {

            const grade = grades[i];
            sum += grade;
        
        };

        const mean = sum / grades.length;
        return mean;

    };

    toString () {

        return super.toString() + '\n' +
`MEDIA VOTI: ${this.calculateMean()}`;

    };

};

