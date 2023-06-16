## Calculator

This is a simple calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

### Features

- Basic arithmetic operations: Addition, subtraction, multiplication, and division.
- Clear button: Clears the input and resets the calculator.
- Delete button: Deletes the last character entered.
- Evaluation: Pressing the "=" button evaluates the expression and displays the result.

### Technologies Used

- HTML
- CSS
- JavaScript

### Usage

1. Clone the repository:

```
git clone https://github.com/your-username/calculator.git
```

2. Open the `index.html` file in a web browser.

3. The calculator interface will be displayed, and you can start performing calculations by clicking the buttons.

### Code Overview

The JavaScript code handles the functionality of the calculator. Here's a brief overview of the code:

```javascript
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
```

The code selects the necessary elements from the DOM, such as the buttons and the operation display field. It then attaches click event listeners to each button.

When a button is clicked, the code checks the button's content. If it's the "=" button, the expression is evaluated using the `eval()` function, and the result is displayed.

If it's the clear button, the string is reset to an empty value, and the display is cleared.

If it's the delete button, the last character of the string is removed.

For other buttons, their content is added to the string, and the updated string is displayed in the operation field.

### Contribution

Contributions to this calculator project are welcome! If you have any suggestions or improvements, feel free to create a pull request.

You can customize and improve the calculator as per your needs. Feel free to modify the code and add additional features. Happy coding!
