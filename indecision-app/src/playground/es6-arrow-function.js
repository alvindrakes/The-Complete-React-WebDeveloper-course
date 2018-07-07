const square = function(x) {
    return x*x
}

// es6 arrow function style
// const squareArrow = (x) => {
//     return x*x
// }

const squareArrow = (x) => x * x;    // if only return value, can use this way

console.log(squareArrow(120));


// challenge area
// const getFirstName = (fullName) => {
//     const firstName = fullName.split(' ')[0]
//     return firstName
// }

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('Alvin drakes'));
