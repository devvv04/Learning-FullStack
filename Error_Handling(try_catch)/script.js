

try {
    let a = prompt("Enter first number")
let b = prompt("Enter second number")
sum = parseInt(a) + parseInt(b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}
else{
console.log("The sum is: ",sum);
}
} catch (error) {
    console.log("Error agya bhai");
    
}

let c = prompt("Enter first number")
let d = prompt("Enter second number")
sum2 = parseInt(c) + parseInt(d);

try {
    console.log("Sum is :",sum2*e);

} catch (error) {
    console.log(error);
    
}

function abc(){
let f = prompt("Enter first number")
let g = prompt("Enter second number")
sum2 = parseInt(f) + parseInt(g);

try {
    console.log("Sum is :",sum2*x);
    return true;

} catch (error) {
    console.log("Error agya bhai");
    return false;
}
finally{
    console.log("COde is executed completely acghasg");
}
}

abc();