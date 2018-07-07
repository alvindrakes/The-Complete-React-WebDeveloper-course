class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    //method
    getGretting() {
        // return 'Hello ' + this.name + ', long time no see!';
        return `hello ${this.name}! long time no see!`
    }

    getDescription() {
        return `${this.name} is ${this.age}-years old.`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age) // need to call the parent constructor 1st using super keyword
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGretting() {
        let gretting = super.getGretting()
        if (this.homeLocation) {
            gretting += ` I am living in ${this.homeLocation}.`
        }
        return gretting
    }
}

const me = new Traveller('Alvin', 28, 'Malaysia');
console.log(me.getGretting());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGretting());
