class Student {
    constructor(name, surname, yob, nick) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nick = nick;
    }

    toString() {
        return 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Anno di nascita: ' + this.yob + '\n' + 'Nickname: ' + this.nick + '\n';
    }
}