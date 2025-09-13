// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function SumSelector(arr) {
    let sum = 0;
    for (const val of arr) {
       if(val<0){
        break;
       }
            sum = sum + val;
    }
    return sum;
}


let eg = [2,4,-1,6,8,-2,4,3,6]
console.log(SumSelector(eg));
