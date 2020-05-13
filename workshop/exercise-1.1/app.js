// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// we need a winning variable (boolean)
// we need two different variables for the messages (you win, yo loose, strings)
// we need a timeout to change the winning = false after 1 second
// we need an event listener that will show the message based on winnig variable

let winning = true;
let winningMessage = "You won";
let losingMessage = "You lost";
function changeUserlost() {
  winning = false;
}
setTimeout(changeUserlost, 1000);

function returnMessage() {
  if (winning === true) {
    console.log(winningMessage);
  } else {
    console.log(losingMessage);
  }
}

document.body.addEventListener("click", returnMessage);

// document.getElementById("test").addEventListener("click", myFunc);

// function myFunc() {
//     setTimeout(function(){
//       console.log("Hello");
//     }, 6000);
// }

// document.body.addEventListener("click", function () {
//     console.log("You won!");
//     clearTimeout(timeOutId);
//   });

//   let timeOutId = setTimeout(function () {
//     console.log("Try again");
//   }, 3000 + Math.random() * 2000);
// Math.random is a value  between 0 and 1. I chhose top value by choosing multiplier.
// If I wanted 0 to 25 * 25)
