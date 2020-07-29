/*
  '+' = 43
  '-' = 45
  '*' = 42
  '/' = 47
*/


/*
  Button activators
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

function displayValues (e) {
  //console.log(e);
  let displayElement = document.createElement('div');
  displayElement.textContent = this.textContent;
  display.appendChild(displayElement);

  if (parseInt(displayElement.textContent) >=0 && parseInt(displayElement.textContent) <=9 ) {
    num += displayElement.textContent;
  }

  if (displayElement.textContent == '+' || displayElement.textContent == '-' ||
      displayElement.textContent == '*' || displayElement.textContent == '/') {
        if (num !== '') {
          valueArr.push(num);
        }
        valueArr.push(displayElement.textContent);
        num = '';
      }
  //let displayElement = this.textContent;
  //displayArr.push(parseInt(displayElement));
  //console.log(displayNum);
  //display.textContent = displayElement;
}

function clearValues () {
  display.innerHTML = '';
  valueArr = [];
  num = '';
  numArr = [];
  operator = '';
}

function delValue () {
  display.removeChild(display.lastElementChild);
  if (num === '') {
    valueArr.pop();
  }
  num = num.slice(0, -1);
}

function evaluate () {
  if (num !== '') {
    valueArr.push(num);
  }
  for (let i = 0; i < valueArr.length; i++) {
    if (i % 2 == 0) {
      // numbers
      numArr.push(parseInt(valueArr[i]));
    }
    else {
      // operation
      operator = valueArr[i];
    }
    count += 1;
    if (i == 0) {
      count -= 1;
    }
    if (count == 2) {
      answer = operate(operator, numArr[0], numArr[1]);
      numArr = [];
      numArr.push(answer);
      count = 0;
    }
  }
  /*
  let num1 = parseInt(valueArr[0]);
  let operator = valueArr[1];
  let num2 = parseInt(valueArr[2]);
  */
  clearValues();
  display.textContent = answer;
  valueArr.push(answer)
}


/*
function displayNum (displayArr) {
  while (displayArr[i] )
    display.textContent =
}
*/

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
let num = "";
let numArr = [];
let operator = '';
let count = 0;
let answer = 0;

activateButtons(buttons);
