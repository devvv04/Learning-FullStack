let obj = {
    a: 1,
    b: "Harry"
}
// obj.__proto__ = "dev";  nothing will happen proto only takes another object as reference
console.log(obj);

let animal = {
    eats : true
}
let rabbit = {
    jumps : true
}
rabbit.__proto__ = animal;
console.log(rabbit);

console.log(rabbit.eats); //true
