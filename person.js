// EREDITARIETà:

class Person {

    constructor (name, surname, yob) { // array vuoto di default a grades
        this.name = name;
        this.surname = surname;
        this._yob = yob;
    };

    get yob() {
        return this._yob; // impostiamo l'anno di nascita con get, sostituendo quella nascosta
    };

    set yob (value) { // con set creiamo una variabile nuova che può sovrascrivere la data
        let oldYob = 1980;  // vecchia nel caso rientri nelle condizioni
        if (this.job) {
            oldYob = this._yob;
        }
        this._yob = value;
        const newAge = this.calculateAge();
        if (newAge < 18 || newAge >= 100) {
            this._yob = oldYob;
        };
    };

    toString () {

        return `NOME: ${this.name}
COGNOME: ${this.surname}
ETà: ${this.calculateAge()}`;

    };

    calculateAge () {

        let date = new Date();
        let year = date.getFullYear();
        let age = year - this._yob;
        return age;

    };

};