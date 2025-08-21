console.log("Code for loops")
console.log("for:");

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log("forin:")

let obj = {
    name : "Dev",
    "roll no" : "1",
    role : "abc"
} 
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
}
for (const key in obj) {
      console.log(key)
    
}

console.log("for of")
for (const c of "codewithme") {
    console.log(c);
}

console.log("while:");
let a = 0
while(a<8){
console.log(a);
a++;
}
let b = 0;
console.log("dowhile:")
do {
    console.log(b);
    b++;
} while (b <5);

let c = 6;
console.log("dowhile:")
do {
    console.log(c);
    b++;
} while (c <5);
