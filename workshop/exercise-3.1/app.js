function createButton() {
  let button = document.createElement("button");
  button.innerText = "click me";
  button.style.backgroundColor = "green";
  button.id = "button1";
  button.addEventListener("click", (event) => {
    button.style.backgroundColor = "red";
  });
  return button;
}

for (let x = 0; x < 21; x++) {
  document.body.appendChild(createButton());
}

//appending a child to body once 20 times
