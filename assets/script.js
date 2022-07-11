const ORDER = ["(", "^", "*", "/", "%", "+", "-"];

function evaluateExpression(expression) {
  for (let i = 0; i < ORDER.length; i++) {
    const operator = ORDER[i];
    const regex = new RegExp(`[\\d\.]+\\${operator}[\\d\.]+`);
    let match = expression.match(regex);

    while (match) {
      expression = expression.replace(match[0], runOperation(...match[0].split(operator).map(e => +e), operator));
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