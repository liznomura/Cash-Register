/*jshint esversion: 6 */
// document.getElementById("plus").onclick = function(){calculator.add();};
const NUM0 = document.getElementById("0");
const NUM00 = document.getElementById("00");
const NUM1 = document.getElementById("1");
const NUM2 = document.getElementById("2");
const NUM3 = document.getElementById("3");
const NUM4 = document.getElementById("4");
const NUM5 = document.getElementById("5");
const NUM6 = document.getElementById("6");
const NUM7 = document.getElementById("7");
const NUM8 = document.getElementById("8");
const NUM9 = document.getElementById("9");
const NUMDOT = document.getElementById("dot");
const DISPLAY = document.getElementById("display");


NUM0.onclick = function() {
  document.getElementById("display").innerHTML = "0";
};

// let getDisplay = function() {
//   Number(DISPLAY);
//   return DISPLAY;
// };

// let updateDisplay = function() {

// };