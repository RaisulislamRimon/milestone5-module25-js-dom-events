// events.js
// console.log("hello");

// option 1 : directy on the button
{
  /* <button onclick="console.log(1)">Show result</button> */
}
{
  /* <button onclick="document.body.style.backgroundColor='yellow'">
Make yellow
</button> */
}

// option 2 : makeFunction() and then on the button

// adding onclick functionality to the buttons
function clickFunction() {
  console.log("hello, click me");
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

function makeOrange() {
  document.body.style.backgroundColor = "orange";
}

// onclick by id and function
const makeTomatoBtn = document.getElementById("makeTomato");
// console.log(makeTomato);
// makeTomato.onclick.style.backgroundColor = "tomato";
// makeTomatoBtn.onclick = makeTomato();
makeTomatoBtn.onclick = makeTomato;

function makeTomato() {
  document.body.style.backgroundColor = "tomato";
}

// option 3 : addEventListener

const makePirpleBtn = document.getElementById("makePirple");
// console.log(makePirpleBtn);
// console.log(makePirpleBtn.innerHTML);
makePirpleBtn.onclick = function makePirple() {
  document.body.style.backgroundColor = "purple";
};
