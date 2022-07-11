# calculator-2
Project provided by The Odin Project.

Create a calculator program that takes an assortment of numbers and operators, and calculate the result.

UI: Header with a basic h1 element claiming "Calculator". Main body of the page will be the calculator, and a footer with a link to my
github.

The calculator will have its body, with a screen at the very top(that displays the user's math expression and the results of those
expressions), three sections consisting of buttons.

On the left, a button for clearing the current display(so whatever numbers are on
screen) a button for clearing the current expression and a 0 button if it doesn't fit in the middle section. These buttons will be colored
differently from the rest, and will align to the bottom left of their parent.

In the middle, buttons for numbers 0(maybe)-9, decimal and maybe the equivalence sign if it fits.

On the right, buttons for the operators(including the equivalence button if it doesn't fit in the mid section)

The middle and right section should look fairly similar, while the left section should have its only boxing and color schem. 

Inputs: Inputs will come from buttons pressed in the UI from the user. The expression the user creates will be handled as a string, and pushed to a function once the equal sign is pressed.

Ouput: The result of the expression the user created, displayed inside of the screen. The output will be a string.

Pseudo code
Create function that runs operations on two numbers and returns result 
  Accepts 3 parameters, 2 numbers and one operator
  Return result of switch statement that checks value of operator paremeter and runs operation on two numbers

Create function that accepts a string representing a expression and reads through the string, parsing for any operations and numbers found, returning the result of the expression
  probably the best way to do this is by using a regex expression that looks for two numbers surrounding a special symbol, removing it from
    Search for operators in order
    If a match is found, remove it from the string and push it to a list
  the string, then seperating the operands and operator and calling them with the function above
  Sum the result of all the operations
  return the sum
Optional: 
Add negative numbers
  tested but failed regex: /(?<=[\s-+*/%^])-?\d+\*(?<=[-+*/%^])-?\d+/

Add parentheses