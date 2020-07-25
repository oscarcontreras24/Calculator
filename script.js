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
  Calculator functions
*/
function add (a, b) {
	}
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

const operatorButton = document.querySelector('#operators');
const numButton = document.querySelector('#numbers');
