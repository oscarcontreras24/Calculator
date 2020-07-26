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
    //console.log(btnArr[i].textContent);
    if (parseInt(btnArr[i].textContent) <= 9 || parseInt(btnArr[i].textContent) >=0) {
      btnArr[i].addEventListener('click', storeValues);
    }
    if (btnArr[i].textContent == '-') {
      btnArr[i].addEventListener('click', evaluate);
    }
  }
}

function storeValues (e) {
  //console.log(e);
  let displayElement = this.textContent;
  displayArr.push(parseInt(displayElement));
  //console.log(displayNum);
  display.textContent = displayElement;
}

/*
  Calculator functions
*/
function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a + b;
}


function multiply (a, b) {
	return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (operand, a, b) {
  if (operand == '+') {
    return add(a,b);
  }
  else if (operand == '-') {
    return subtract(a,b);
  }
  else if (operand == '*') {
    return multiply(a,b);
  }
  else if (operand == '/') {
    return divide(a,b);
  }
}

const buttons = document.querySelectorAll('#btn');
const display = document.querySelector('#content');

// arr to store all values clicked
let displayArr = [];


activateButtons(buttons);
