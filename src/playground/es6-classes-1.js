
class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`
    }
    getDesctiption() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDesctiption() {
        let description = super.getDesctiption();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
};

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveler('Piotr Gaik', 29, 'Gliwice');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());