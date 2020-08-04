/*
  '+' = 43
  '-' = 45
  '*' = 42
  '/' = 47
*/


/*
  Button activators
*/

/*
Input: node array
Output: null

As a side effect this function serves to tie each element in the btn array
to a specific event when a user clicks on a button element.

*/

function activateButtons (btnArr) {
  for (let i = 0; i < btnArr.length; i++) {
    if (btnArr[i].textContent != 'DEL' && btnArr[i].textContent != 'C' &&
    btnArr[i].textContent != '=') {
      btnArr[i].addEventListener('click', displayValues);
    }
    if (btnArr[i].textContent == "C") {
      btnArr[i].addEventListener('click', clearValues);
    }
    if (btnArr[i].textContent == "DEL") {
      btnArr[i].addEventListener('click', delValue);
    }
    if (btnArr[i].textContent == '=') {
      btnArr[i].addEventListener('click', evaluate);
    }
  }
}

/*

Input: selected element from DOM
Output: null

This function accepts all DOM elements that correspond to numbers and math operators.
When one of these keys is clicked, it adds the text content of the button and
appends the value as a child element to the calculator display. Also, adds values
to numerous array containing elements.

*/

function displayValues (e) {
  let displayElement = document.createElement('div');
  displayElement.textContent = this.textContent;

  // only want to append one decimal to an existing number
  if (!num.includes(".") || this.textContent != ".") {
    display.appendChild(displayElement);

    /* add the string value of the text content to a number string to allow users
    to make more than one digit numbers */
    if ( (parseInt(displayElement.textContent) >=0 && parseInt(displayElement.textContent) <=9)
        || displayElement.textContent == ".") {
        num += displayElement.textContent;
    }
  }

  /* accounts for operato selections and adds both the number string and operator
  string to an array */
  if (displayElement.textContent == '+' || displayElement.textContent == '-' ||
      displayElement.textContent == '*' || displayElement.textContent == '/') {
        // ensures that empty values are not passed
        if (num !== '') {
          valueArr.push(num);
        }
        valueArr.push(displayElement.textContent);
        num = '';
      }
}

/*
Input: 'C' button
Output: null

This function is associated with the event listener for the clear button. It takes
care of clearing the display HTML, number strings and arrays
*/

function clearValues () {
  display.innerHTML = '';
  valueArr = [];
  num = '';
  numArr = [];
  operator = '';
}

/*
Input: 'DEL' button
Output: null

This function takes care of deleting the previous element button selection made
of an operator or number element.
*/

function delValue () {
  display.removeChild(display.lastElementChild);
  // deletes an operator display if no number display
  if (num === '') {
    valueArr.pop();
  }
  // makes sure to cut off the num string collector for multiple digits
  num = num.slice(0, -1);
}

/*
Input: '=' button
Output: null

This function evaluates all numbers in the value array with the operators passed
through and updates the display with the answer value.
*/

function evaluate () {
  // pushes the last number value after the math operator is selected
  if (num !== '') {
    valueArr.push(num);
  }
  // this loop accounts for the num, operator, num pattern to evaluate
  for (let i = 0; i < valueArr.length; i++) {
    if (i % 2 == 0) {
      // numbers for operation are stored in a 2 value num array
      numArr.push(parseFloat(valueArr[i]));
    }
    else {
      // operation
      operator = valueArr[i];
    }
    // takes care of ensuring that every 3rd value an evaluation is done
    count += 1;
    // ensures that the 0 index does not throw off the rest of the positive intger indexes
    if (i == 0) {
      count -= 1;
    }
    // on the 3rd count evaluates the number array
    if (count == 2) {
      answer = operate(operator, numArr[0], numArr[1]);
      // clear the num array
      numArr = [];
      // ensures that the next value stores in the 2 value array is the result of the previous two numbers
      numArr.push(answer);
      count = 0;
    }
  }

  // erases all the values when all the current values have been evaluated
  clearValues()

  // ensures that answer will not exit screen
  if (answer.toString().length >= 10) {
    answer = answer.toFixed(8);
  }
  display.textContent = answer;
  // makes sure that the final result is added to the value arr for further calculations
  valueArr.push(answer)
}

/*
  Calculator functions
*/


function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}


function multiply (a, b) {
	return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (operand, a, b) {
  if (operand == '+') {
    return add(a, b);
  }
  else if (operand == '-') {
    return subtract(a, b);
  }
  else if (operand == '*') {
    return multiply(a, b);
  }
  else if (operand == '/') {
    return divide(a, b);
  }
}

const buttons = document.querySelectorAll('#btn');
const display = document.querySelector('#content');

// arr to store all values clicked
let valueArr = [];
let num = ""; // string that will be place holder for numbers after clicking them
let numArr = []; // arr to hold 2 numbers used for an operation
let operator = ''; // holds the operator
let count = 0; // counter variable to control the flow of operations in tghe valueArr
let answer = 0; // place holder for the running total for operations

activateButtons(buttons);
