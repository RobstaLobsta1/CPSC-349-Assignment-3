//Variable to represent screen HTML element
const screen = document.querySelector(".screen");
//Variable to represent ALL button HTML elements
const buttons = document.querySelectorAll("button");
//Array to list all Operators
const operators = ["*", "/", "-", "+", "="]; //"(", ")"];

//const last = screen.value.slice(-1); ?Prevent multiple operators?
let output = "";

const calc = function (btnValue) {
  /*If equals button is clicked and screen is not empty, 
  then evaluate the argument on screen*/
  if (btnValue == "=" && output != "") {
    output = eval(output);
    //Clear button
  } else if (btnValue == "C") {
    output = "";
  } /*else if (operators.includes(btnValue) && operators.includes(last)) {
    return;} ?Prevent multiple operators?*/ else {
    //Prevents user from entering an operator before any numbers
    if (output == "" && operators.includes(btnValue)) return;
    //Otherwise the value of the button (number) is added to the output
    output += btnValue;
  }
  screen.value = output;
};

/*When a button is pressed, eventListener calls the click 
function which then executes the calc function where
the respective data value for each button is passed over.*/
buttons.forEach(function (button) {
  button.addEventListener("click", function (click) {
    calc(click.target.dataset.value);
  });
});
