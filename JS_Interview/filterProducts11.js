// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

//  let a = [1,2,4,9,3,5,11,34,5,65,8]
// let result = a.filter((e)=>{
//     if(e>7){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(result);

let example = [
  { name: "Laptop", category: "Electronics", price: 800 },
  { name: "tablet", category: "Electronics", price: 550 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Shoes", category: "Clothing", price: 60 },
  { name: "Book", category: "Stationery", price: 15 },
  { name: "pen", category: "Stationery", price: 10 }
];

function filterProducts(arr,criterion,amountlessthen) {
    return arr.filter(p=>p.category.toLowerCase()===criterion.toLowerCase()&&p.price <= amountlessthen) 

}

console.log(filterProducts(example,"electronics",600));
