let a = [2,4,8,3,12,15]

//map
console.log(a.map((e) => {
    return e**2
}
))

//filter

console.log(a.filter((e)=>{
    if(e>7){
        return true
    }
    else{
        return false
    }
}))

//reduce

console.log(a.reduce((a,b)=>{
    return a+b
}))

//or

function add(a,b){
   return a+b
}
console.log(a.reduce(add))

//array_from

b = Array.from("Dev Verma")
console.log(b.join("-"))