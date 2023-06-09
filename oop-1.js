// OOP è un metodo di programmazione detto PARADIGMA, e ce ne sono di diversi tipi:

// JavaScript ha adottato il suo vecchio modo dei prototype di programmare gli
// oggetti con i metodi degli altri linguaggi, che sono più comprensibili.
// Orientare gli oggetti vuol dire rappresentare i dati di cose reali esistenti
// su cui si deve lavorare.

// Creiamo un softwar che gestisce la classe AXIA in cui ci sono anche io:


// const student1 = {              // Commentato perché metodo di esempio,
//     name: "Davide",             // per introdurre il metodo delle classi
//     surname: "Consigliere",     // eseguite qui sotto.
//     yob: 1989,
//     grades: [4, 6, 7, 4, 6]
// };



// const student2 = {
//     name: "Francesco",
//     surname: "Badile",
//     yob: 1993,
//     grades: [5, 8, 6, 7, 10]
// };

// const student3 = {
//     name: "Valentina",
//     surname: "Cherubini",
//     yob: 2001,
//     grades: [8, 7, 10, 9, 8]
// };

// const teacher = {
//     name: "Andrea",
//     surname: "Asioli",
//     yob: 1978,
//     students: [student1, student2, student3]
// };

// Calcolare la media dei voti:

// function calculateMeanOfStudent (student) {

    // const grades = student.grades;
    // let sum = 0;
    // for (let i = 0; i < grades.length; i++) {

    //     const grade = grades[i];
    //     sum += grade;
        
    // };

    // const mean = sum / grades.length;
    // return mean;

// };

// console.log(calculateMeanOfStudent(student1));
// console.log(calculateMeanOfStudent(student2));
// console.log(calculateMeanOfStudent(student3));


// // Trovare il miglioe studente dell'insegnante in base alla media voti:

// function findBestStudentOfTeacher (tempTeacher) {

//     const students = tempTeacher.students;
//     let bestStudent = students[0];
//     for (let i = 1; i < students.length; i++) {
//         const actualStudent = students[i];
//         const bestMean = calculateMeanOfStudent(bestStudent);
//         let actualMean = calculateMeanOfStudent(actualStudent);
//         if (actualMean > bestMean) {
//             bestStudent = actualStudent;
//         };
//     };

//     return bestStudent;

// };

// console.log(findBestStudentOfTeacher(teacher));




// RISTRUTTURIAMO IL TUTTO NEL NUOVO APPROCCIO AD OGGETTI!!!....next files...... ===>>


// CLASSI!

const vecchietto = new Person ("Battista", "Parodi", 1934);

const student1 = new Student ("Davide", "Consigliere", 1989, [4, 6, 7, 4, 6]);
const student2 = new Student ("Francesco", "Badile", 1993, [5, 8, 6, 7, 10]);
const student3 = new Student ("Valentina", "Cherubini", 2001, [8, 7, 10, 9, 8]);
const student4 = new Student ("Simone", "Maccarone", 2003);

const teacher = new Teacher ("Andrea", "Asioli", 1978, [student1, student2, student3]);

console.log(student1.calculateMean());
console.log(student2.calculateMean());
console.log(student3.calculateMean());
console.log(student4.calculateMean());

console.log(teacher.findBestStudent());


console.log(teacher.toString());
console.log(student1.calculateAge());


function smash (words) {
    return words.join(" ");
};


student1.yob = 1979;
console.log(student1.toString());

console.log(student4.toString());

console.log(vecchietto.toString());
























// ESERCIZI CODEWARS:


let wordsArray = ['hello', 'world', 'this', 'is', 'great'];

console.log(smash(wordsArray));


function removeChars(str){
    
    let string = "";
    for (let i = 1; i < str.length-1; i++) {
        string += str[i];
    };        

    return string;
    
};


console.log(removeChars("porcapaletta"));


const areaOrPerimeter = function(l , w) {
    
    let result = 0; 
    if (l === w) {
        result = l*w;
        return result;
    };

    result = (l*2)+(w*2);
    return result;
    
};

console.log(areaOrPerimeter(2, 4));