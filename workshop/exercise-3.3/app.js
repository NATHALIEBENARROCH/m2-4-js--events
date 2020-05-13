function createButton() {
  let button = document.createElement("button"); //must be html tag
  button.innerText = "click me";
  button.style.backgroundColor = "red";
  button.style.top = Math.random() * 500 + "px";
  button.style.left = Math.random() * 500 + "px";
  button.style.position = "absolute"; //in this case it is relative to whole body so just putting an absolute works
  button.addEventListener("click", function () {
    if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  });
  return button;
}

for (x = 0; x < 20; x++) {
  document.body.appendChild(createButton());
}
