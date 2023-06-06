const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`)
}

//Returns true if the number is not a number.
function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

//Ask the user for the first operand.
prompt('Please enter the first number: ');
let numberOne = readline.question();
while(invalidNumber(numberOne)) {
  prompt('Please input a valid number: ');
  numberOne = readline.question();
};

//Ask the user for the second operand.
prompt('Please enter the second number: ');
let numberTwo = readline.question();
while(invalidNumber(numberTwo)) {
  prompt('Please input a valid number: ');
  numberTwo = readline.question();
};

//Ask the user for the operation.
prompt('Please select the operator:\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
let operator = readline.question();
while(invalidOperator(operator)) {
  prompt('Please input a valid operator: ');
  operator = readline.question();
};

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

prompt('The result is ' + result + '.');