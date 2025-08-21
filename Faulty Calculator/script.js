const readline = require("readline-sync");

console.log("Faulty calculator");
let a = Number(readline.question("Enter first number: "));
let b = Number(readline.question("Enter second number: "));
let operator = readline.question("Enter your operator (+, -, *, /): ");
c= Math.random();
if(c<0.1)

{
   let sum = a-b;
   let mul = a+b;
   let dif = a+b;
   let div = a**b;
   if(operator == "+")
    {
        console.log("Sum is:", sum);
   }
   else if(operator == "-")
    {
        console.log("Difference is is:", dif);
   }
   else if(operator == "*")
    {
        console.log("Product is:", mul);
   }
   else if(operator == "/")
    {
        console.log("Division is:", div);
   }
   else{
    console.log("Invalid operator");
   }
    
}
else{
    let sum = a+b;
   let mul = a*b;
   let dif = a-b;
   let div = a/b;
   if(operator == "+")
    {
        console.log("Sum is:", sum);
   }
   else if(operator == "-")
    {
        console.log("Difference is:", dif);
   }
   else if(operator == "*")
    {
        console.log("Product is:", mul);
   }
   else if(operator == "/")
    {
        console.log("Division is:", div);
   }
   else{
    console.log("Invalid operator");
   }
    
}

