/*jshint esversion: 6 */
let calc = window.calculator;
const DISPLAY = document.getElementById('display');

  let getValue = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  };

let nums = getValue(".num"),
    equals = getValue("#equals"),
    operators = getValue(".operators");

function clickNum() {
  DISPLAY.innerHTML += this.value;
}

function clickOperator() {
  let input = 0;
  let op;
  return function(){
    if(typeof op !== 'string') {
      op = this.value;
      input = parseInt(DISPLAY.innerHTML);
      calc.load(input);
      DISPLAY.innerHTML = '';
    } else if(op === '+') {
      input = parseInt(DISPLAY.innerHTML);
      DISPLAY.innerHTML = calc.add(input);
    } else if(op === '-') {
      input = parseInt(DISPLAY.innerHTML);
      DISPLAY.innerHTML = calc.subtract(input);
    } else if(op === '*') {
      input = parseInt(DISPLAY.innerHTML);
      DISPLAY.innerHTML = calc.multiply(input);
    } else if(op === '/') {
      input = parseInt(DISPLAY.innerHTML);
      DISPLAY.innerHTML = calc.divide(input);
    }
  };

}

/* The click events */

  // numbers
  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = clickNum;
  }

  // operators
  for (let i = 0, l = operators.length; i < l; i++) {
    operators[i].onclick = clickOperator();
  }



  // equals
  // equals.onclick = displayNum;

  // clear
  // getValue("#clear").onclick = clearAll;