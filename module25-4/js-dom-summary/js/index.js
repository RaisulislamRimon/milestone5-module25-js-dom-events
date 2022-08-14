function handleOnClick() {
  console.log("btn is clicked");
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerHTML = "handle by function attached on onclick attribute";
}

// option 2

document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    console.log("event listener is clicked");
    const handlerStatus = document.getElementById("handler-status");
    // handlerStatus.innerHTML = "handle by function attached on event listener";
    handlerStatus.innerText = "text updated by add event listener button";
  });

//   option 2

document.getElementById("btn-update").addEventListener("click", function () {
  console.log("update button is clicked");
  const inputField = document.getElementById("input-field");
  console.log(inputField);
  console.log(inputField.value);
  const inputText = inputField.value;
  const p = document.getElementById("input-text-display");
  p.innerText = inputText;
  //   to empty the input field
  inputField.value = "";
});
