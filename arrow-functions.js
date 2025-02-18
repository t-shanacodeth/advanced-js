/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */


// Vanilla JavaScript Function

// Function without parameters (i.e. anonymous): empty parentheses required to emphasise that you are declaring a function;
// Function with one parameter: no parentheses required;
// Function with more than one parameter: parentheses required.

/* 
function functionName(parameter1, parameter2) {
  Code to be executed goes here
}
*/

function addTwoNumbers(a, b) {
  // Code block
  return a+ b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);


// Arrow Function With Parameters

/*
const functioName = () => {
  Code to be executed goes here
}
*/

const addTwoNumbers1 = (a, b) => {
  // Code block
   return a+ b;
}

let sum = addTwoNumbers1(3, 5);
console.log(sum);


// Single Line Arrow Function With Parameters (used for simple fucntions)

/* 
const functionName = (parameter1, parameter2) => (implicit return code)
*/

const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello World!');

const sayHello = () => console.log('Howdy fren!!');
sayHello;

// Returning Multiple Lines

const returnMultipleLines = () => {
  ` <p>
      This is a multiline string!
    </p> `
}

console.log(returnMultipleLines());
