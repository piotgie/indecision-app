const square = function (x) {
    return x * x;
};
console.log(square(8));


// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x ; 
console.log(squareArrow(2));

// challange
// use arrow function  getFirstName
// getFirstName('Mike Smith') -> 'Mike'
// create regular arrow function
// create shorthand syntax arrow function

const getFirstName = (name) => {
    return name.split(' ')[0]
};
console.log(getFirstName('Piotr Gaik'));

const getSecondName = (name) => name.split(' ')[1];
console.log(getSecondName('Piotr Gaik'));