var [x,y] = [3,5];
console.log(x,y);
var[x,y] = [2,8,5,3]
console.log(x,y);

var[x,y,...rest] = [2,3,4,5,6,7,8]
console.log(x,y,rest);

let obj = {
    a:1,
    b:2,
c:3
}

console.log(obj.a,obj.b);
//another way:
let {a,b} = obj;
console.log(a,b);


