// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function ArrayMapping(Arr) {
    let result  = []
for (let element of Arr) {
    let double = await new Promise((resolve, reject) => {
        setTimeout(() => {
            element = element * 2;
            resolve(element);
        }, 500);
    })
    console.log(double);
    
    result.push(double)
}
return result;
}
// ArrayMapping([1, 2, 3, 4]).then(res => console.log(res));
async function main() {
    const final = await ArrayMapping([1,2,3,4,5,6]);
    console.log("Final array: ",final);
    
}
main()





//try:

//1.all in 500 ms
// function asyncDoubleArray(numbers) {
//     return numbers.map(num => 
//         new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500);
//         })
//     );
// }

// // Example usage:
// const numbers = [1, 2, 3, 4];
// const promises = asyncDoubleArray(numbers);
// // console.log(asyncDoubleArray(numbers));


// Promise.all(promises).then(result => {
//     console.log(result); // [2, 4, 6, 8] after 500ms
// });



// do one by one(500-500) but print all at once(after all done)
// async function asyncDoubleSequential(numbers) {
//   let result = [];
  
//   for (let num of numbers) {
//     // wait 500ms before doubling each number
//     let doubled = await new Promise(resolve => {
//       setTimeout(() => {
//         resolve(num * 2);
//       }, 1000);
//     });

//     result.push(doubled);
//   }

//   return result;
// }

// // Example usage
// asyncDoubleSequential([1, 2, 3, 4]).then(result => {
//   console.log(result); // [2, 4, 6, 8] but sequentially, ~2s total
// });