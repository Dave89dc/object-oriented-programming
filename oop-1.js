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


const student1 = new Student ("Davide", "Consigliere", 1989, [4, 6, 7, 4, 6]);
const student2 = new Student ("Francesco", "Badile", 1993, [5, 8, 6, 7, 10]);
const student3 = new Student ("Valentina", "Cherubini", 2001, [8, 7, 10, 9, 8]);

const teacher = new Teacher ("Andrea", "Asioli", 1978, [student1, student2, student3]);

console.log(student1.calculateMean());
console.log(student2.calculateMean());
console.log(student3.calculateMean());

console.log(teacher.findBestStudent());


// COMPITO:

// Aggiungere ad entrambe le classi la funzione "calculateAge()", in cui
// tramite l'utilizzo delle date in javaScript calcoli gli anni.


// Aggiungere ad entrambe le classi la funzione "calculateAge()", 
// la quale ritorna una stringa così fatta:

// TEACHER:

// NOME: blabla
// COGNOME: blabla
// ETà: blabla
// MIGLIOR STUDENTE: blabla

// STUDENTS:

// NOME: blabla
// COGNOME: blabla
// ETà: blabla
// MEDIA: blabla


console.log(teacher.toString());
console.log(student1.calculateAge());


function smash (words) {
    return words.join(" ");
};

let wordsArray = ['hello', 'world', 'this', 'is', 'great'];

console.log(smash(wordsArray));


function removeChar(str){
    
    return str.replace(str[0], "").replace(str[str.length-1, ""]);
    
};

console.log(removeChar("porcapaletta"))