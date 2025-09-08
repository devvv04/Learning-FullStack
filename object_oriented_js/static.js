class abc{
    static add(a,b){
        return a + b;
    }
}

console.log(abc.add(7,3));
let obj = new abc;
console.log(obj.add(5,7));

