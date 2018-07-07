// argument objects - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments);
    return a + b
}
console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: ' hey bob',
    cities: ['malaysia', 'singapore'],
    printPlacesLived() {
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city);
        // });

        return this.cities.map((city) =>  city + ' is awesome!')
    }
}
console.log(user.printPlacesLived());


// challenge area
const multiplier = {
    numbers: [3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());


