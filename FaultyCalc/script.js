// take input from user

const firstOperand = window.prompt("Enter first operand:");
const secondOperand = window.prompt("Enter second operand:");
const operation = window.prompt("Enter operation to perform:");

let random = Math.random();
let obj = {
   "+" : "-",
   "*" : "+",
   "-" : "/",
   "/" : "**"
};

if(random > 0.1){
   // perform wrong calculation
   window.alert(eval(firstOperand + obj[operation] + secondOperand));
}
else{
   // perform correct calculation
   window.alert(eval(firstOperand + operation + secondOperand));
}


