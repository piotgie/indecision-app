// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Piotr',
    cities: ['Gliwice', 'Pyskowice'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};
console.log(user.printPlacesLived())

// challange area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied

    numbers: ['2', '4', '6'],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }

};
console.log(multiplier.multiply());