var nameVar = 'Piotr';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = 'Andrew Mead';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}