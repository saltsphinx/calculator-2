const ORDER = ["^", "*", "/", "%", "+", "-"];
let currentExpression = "";
let currentNumbers = "";

const display = document.querySelector(".display-text");

setUpUI();

function setUpUI() {
  document.querySelector(".clear").addEventListener("click", () => currentNumbers = "");
  document.querySelector(".clear-exp").addEventListener("click", clearExpression);
  document.querySelector(".decimal").addEventListener("click", decimalPress);
  document.querySelector(".equal").addEventListener("click", equalPress)
  
  document.querySelectorAll(".number").forEach(node => node.addEventListener("click", numberPress));
  document.querySelectorAll(".operator").forEach(node => node.addEventListener("click", operatorPress));
  document.querySelectorAll("button").forEach(node => node.addEventListener("click", updateDisplay));
}

function clearExpression() {
  currentNumbers = "";
  currentExpression = "";
}

function updateDisplay() {
  display.textContent = currentNumbers;
}

function numberPress(e) {
  const number = e.target.textContent;
  currentNumbers += number;
  currentNumbers = currentNumbers.replace(/^0+/, "");
}

function operatorPress(e) {
  if (/\d/.test(currentNumbers)) {
    const operator = e.target.textContent;
    currentExpression += currentNumbers + operator;
    currentNumbers = "";
  }
}

function decimalPress() {
  currentNumbers = currentNumbers.replace(".", "");
  currentNumbers += ".";
}

function equalPress() {
  currentExpression += /\d/.test(currentNumbers) ? currentNumbers : "0";
  currentNumbers = Math.abs(+evaluateExpression(currentExpression));
  currentExpression = "";
}

function evaluateExpression(expression) {
  for (let i = 0; i < ORDER.length; i++) {
    const operator = ORDER[i];
    const regex = new RegExp(`[\\d\.]+\\${operator}[\\d\.]+`);
    let match = expression.match(regex);

    while (match) {
      expression = expression.replace(match[0], runOperation(...match[0].split(operator).map(x => +x), operator));
      match = expression.match(regex);
    }
  }

  return expression;
}

function runOperation(operand1, operand2, operator) {
  switch(operator) {
    case "*":
      return operand1 * operand2; 
    case "^":
      return operand1 ** operand2;
    case "/":
      return operand1 / operand2;
    case "%":
      return operand1 % operand2;
    case "+":
      return operand1 + operand2;
    case "-":
        return operand1 - operand2;
    default:
      return 0;
  }
}