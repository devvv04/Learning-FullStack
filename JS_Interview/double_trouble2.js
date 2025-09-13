// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let num = [2,3,4,4,7,3,8,8,9]

function double_trouble(Arr){
let i = 0;
let ans = [];
while(i<Arr.length){
    if(Arr[i]==Arr[i+1]){
        ans.push(Arr[i] * 2)
        ans.push(Arr[i+1])
        i=i+2; 
    }
    else{
        ans.push(Arr[i]*2)
        i++
    }
}
return ans;
}

console.log(double_trouble(num));


