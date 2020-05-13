function createButton() {
  let button = document.createElement("button");
  button.innerText = "click me";
  button.style.backgroundColor = "red";
  button.id = "button1";
  button.addEventListener("click", (event) => {
    if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  });
  return button;
}

for (let x = 0; x < 20; x++) {
  document.body.appendChild(createButton());
}

//appending a child to body once 20 times
