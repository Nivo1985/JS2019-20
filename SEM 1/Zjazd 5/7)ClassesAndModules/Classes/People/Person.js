class Person {
    constructor(id){
        this.id = id;
        this.type = 'basic person';
    }
    showInfo(){
        return `Of type ${this.type} and id ${this.id}`
    }
}

module.exports = Person;