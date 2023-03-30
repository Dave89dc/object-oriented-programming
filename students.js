// LE CLASSI!!!


class Student {

    constructor (name, surname, yob, grades) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.grades = grades;
    };

    calculateMean () {

        const grades = this.grades;
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {

            const grade = grades[i];
            sum += grade;
        
        };

        const mean = sum / grades.length;
        return mean;

    };

    toString () {

        

    };

    calculateAge () {



    };

};