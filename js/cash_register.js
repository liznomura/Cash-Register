/*jshint esversion: 6 */

// //variables to reference each button + display
// const NUM0 = document.getElementById("0");
// const NUM00 = document.getElementById("00");
// const NUM1 = document.getElementById("1");
// const NUM2 = document.getElementById("2");
// const NUM3 = document.getElementById("3");
// const NUM4 = document.getElementById("4");
// const NUM5 = document.getElementById("5");
// const NUM6 = document.getElementById("6");
// const NUM7 = document.getElementById("7");
// const NUM8 = document.getElementById("8");
// const NUM9 = document.getElementById("9");
// const NUMDOT = document.getElementById("dot");
const DISPLAY = document.getElementById("display");


// NUM0.onclick = function() {
//   document.getElementById("display").innerHTML = "0";
// };


// let updateDisplay = (function() {
//   let num = 0;
//   return function(btn) {
//     num = Number(btn.target.value);
//     return num;
//   };
// })();


// // let updateDisplay = (function() {
// //     let num = 0;
// //     return function () { //should take the string in the display and convert it to a number
// //       num = Number(DISPLAY);
// //       return num;//returns DISPLAY as a number that can be used
// //     };
// // })();

// NUM0.onclick = updateDisplay();

// // function(e){ //replace anon function with a function
// //   console.log(e.target.value);

// // };

/****/

let buttons = document.querySelectorAll('.buttonGroup');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  let btnValue = this.value;
  let displayInput = DISPLAY.innerHTML += btnValue;

  //clear
  if(btnValue === 'clear') {
    displayInput = '';
  }
  //equals
  else if(btnValue === '=') {
    let equation = eval(displayInput);

  }
  });
}
