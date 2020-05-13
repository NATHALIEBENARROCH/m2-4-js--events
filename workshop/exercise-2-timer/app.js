// function watch() {
//   document.getElementById("stopwatch").innerText = new Date().toString();
// }

// watch();

// setInterval(watch, 500);

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("START COUNTDOWN");
//   let display = document.getElementById("display");
//   let currentTime = 0;
//   let displayId = setInterval(() => {
//     display.innerText = ++currentTime;
//   }, 1000);
// });

let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define vars to hold INTERVAL FUNCTION?????
let interval = null;

//Define vars to hold stopwatch status
let status = "stopped";

//stopwatch function to determine increments

function stopWatch() {
  seconds++;

  //logic to increment to next value

  // if seconds divided by sixty is one then pass on to minutes
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // If seconds/minutes/hours are only one digit add a leading digit
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  //display updated time values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

//CALLING STOPWATCH FUNCTION AND UPDATING IT EVERY MILLISECOND

function startStop() {
  if (status === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

document.getElementById("startStop").addEventListener("click", startStop);
