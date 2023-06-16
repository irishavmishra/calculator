let string = "";
let buttons = document.querySelectorAll(".btn");
let operation = document.querySelector(".operation");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML === "=") {
      string = eval(string);
      string = string.toString();
      operation.value = string;
    } else if (event.target.classList.contains("clear")) {
      string = "";
      operation.value = string;
    } else if (event.target.classList.contains("del")) {
      if (string.length !== 0) {
        string = string.slice(0, -1);
        document.querySelector(".operation").value = string;
      }
    } else {
      string += event.target.innerHTML;
      operation.value = string;
    }
  });
});