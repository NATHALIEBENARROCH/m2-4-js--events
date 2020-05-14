//SOLUTION
const body = document.body;
const startButton = document.getElementById("start-button");
const timer = document.getElementById("timer");
const gameBoard = document.getElementById("board");

const gameButtons = Math.floor(Math.random() * 10) + 1;
//math.random generates a number between 0 and 1 so we are multiplying 1 x 10.
//Math.floor rounds down to nearest decimal
// +1 makes sure that although it is rounded down there is a minimum of 1
const gameTime = 5000; // in miliseconds

const clickedState = [];
//this array will be filled with false value buttons that become true as clicked

// this checks to see if all true or clicked.
function checkArray(arr) {
  return arr.every(function (item) {
    return item;
  });
}

function endGame() {
  //step 1 of game
  // to win the game ALL buttons must be in clicked state hence true
  if (checkArray(clickedState)) {
    alert("You win");
  } else {
    alert("You Lose...");
  }
  //step 2 of game ending
  // clear the event listener of all the buttons at the end of the game
  for (let i = 0; i < gameButtons; i++) {
    document
      .getElementById(`btn-${i}`)
      .removeEventListener("click", toggleColor);
  }
}

function toggleColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle("green");

  // get id
  const id = buttonId.split("-")[1];
  // toggle clickedState value will change a false to true and vice versa
  clickedState[id] = !clickedState[id];
}

function startGame() {
  // remove the start button
  startButton.remove();

  // start timer
  timer.innerText = gameTime / 1000;
  let seconds = gameTime - 1000;
  const countdown = setInterval(function () {
    if (seconds < 1) {
      clearInterval(countdown);
      endGame();
    }
    timer.innerText = seconds / 1000;
    seconds -= 1000;
  }, 1000);

  // add buttons INITIALIZER
  for (let i = 0; i < gameButtons; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.id = `btn-${i}`;
    button.style.top = `${Math.random() * 575}px`;
    button.style.left = `${Math.random() * 975}px`;

    gameBoard.appendChild(button);

    // each button has an initial value of false and when clicked it changes to true.
    // if .every button clicked you won
    // YOU ARE STATING IT IS FALSE TILL CLICKED
    clickedState.push(false);
    // the colour toggle changes it to true
    button.addEventListener("click", toggleColor);
  }

  const buttonStatus = setInterval(function () {
    if (checkArray(clickedState)) {
      timer.innerText = 0;
      endGame();
      clearInterval(buttonStatus);
    }
  }, 400);
}
