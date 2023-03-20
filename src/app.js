/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//variables
const excuse = document.querySelector("#excuse");
const btn = document.querySelector("#button");
let generatedExcuse = "";

//code
// data
const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const dataset = [who, action, what, when];

function RandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}
function GetItem(arr, i) {
  return arr[i];
}
function GetString(el) {
  return `${GetItem(el, RandomNumber(el))} `;
}

function newExcuse(data) {
  return (generatedExcuse = data.map(el => `${GetString(el)}`)).join("");
}
//console.log(GetItem(el, RandomNumber(el))));
generatedExcuse = newExcuse(dataset);

window.onload = () => {
  //write your code here
  excuse.innerHTML = generatedExcuse;
};

btn.addEventListener("click", () => (excuse.innerHTML = newExcuse(dataset)));
