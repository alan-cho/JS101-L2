const readline = require('readline-sync');
console.log('Welcome to Calculator!');

//Ask the user for the first operand.
console.log('Please enter the first number:');
let numberOne = readline.question();

//Ask the user for the second operand.
console.log('Please enter the second number:');
let numberTwo = readline.question();

//Ask the user for the operation.
console.log('Please select the operator:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
let operator = readline.question();

//Evaluate the expression built from the user.
let result;
switch (operator) {
  case '1':
    result = Number(numberOne) + Number(numberTwo);
    break;
  case '2':
    result = Number(numberOne) - Number(numberTwo);
    break;
  case '3':
    result = Number(numberOne) * Number(numberTwo);
    break;
  case '4':
    result = Number(numberOne) / Number(numberTwo);
    break;
  default:
    break;
};

console.log(`The result is ${result}.`);