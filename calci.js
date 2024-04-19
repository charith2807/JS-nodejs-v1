const readline = require("readline"); //importing module readline
//creating an interface for readline module
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//function decalrations
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function calculator() {
  r1.question("enter the first number: ", (num1) => {
    r1.question("enter the ssecond number: ", (num2) => {
      r1.question("select the required operator +,-,*,/", (opeartor) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
        switch (opeartor) {
          case "+":
            result = add(a, b);
            break;
          case "-":
            result = sub(a, b);
            break;
          case "*":
            result = mul(a, b);
            break;
          case "/":
            result = div(a, b);
            break;
          default:
            console.log("inavlid operator");
            r1.close();
            return;
        }
        console.log(result);
        r1.close;
      });
    });
  });
}
calculator(); //calling the function
