console.log("Arrays :");
a = [1,2,3,4,5]
console.log(a);
console.log(a.length);
console.log(a[3]);
console.log(a[3] = 576);
console.log(a)
console.log(typeof a);
console.log(a.toString());
console.log(a.join("-"))
console.log(a.join(" and "));
// push/pop from end
console.log(a.pop());
console.log(a.length) //4
console.log(a.push(45,49));
console.log(a)
// shift / unshift from start
console.log(a.shift())
console.log(a.length)
console.log(a.unshift(23))
console.log(a)

console.log(a.length)
delete a[2];
console.log(a) //make a emlty item
console.log(a[2]) //undefined
console.log(a.length)//still 6 

a2=[56,35,97]
a3 = [78,39,42 ]
console.log(a.concat(a2,a3).join("-"))

a4 = [78,48,92,46,28,20,41,83,23,44,87]
// console.log(a4.sort())

console.log(a4.splice(4,3,1,2,3,4,5))
console.log(a4)
console.log(a2)
console.log(a2.push(45,85,34,21))
console.log(a2)
// console.log(a2.slice(2))
console.log(a2.slice(2,4))
console.log(a4.reverse())
