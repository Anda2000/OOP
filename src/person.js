class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {
        let name = this.name;
        let age = this.age;
        let gender = this.gender;
        let int = this.interests;
        return `Hello,My name is ${name} I am ${age} year old ${gender}. My interests are ${int}`;
    }
}

let person = new Person('Ryan', 30, 'male', [
    'being a hardarse',
    'agile',
    'ssd hard drives.'
]);

let greeting = person.hello();
console.log(greeting)

module.exports = {
    Person
};
