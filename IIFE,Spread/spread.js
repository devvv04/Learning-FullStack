function sum(a,b,c){
    return a+b+c;
}

let arr = [4,7,3];
console.log(sum(arr[0],arr[1],arr[2])); //normal

//using spread:
console.log(sum(...arr));

