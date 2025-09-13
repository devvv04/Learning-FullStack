// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const a = [
    {name:"soap",price:200,quantity:3},
    {name:"brush",price:50,quantity:4},
    {name:"cookie",price:20,quantity:10},
    {name:"chips",price:10,quantity:5},
    {name:"coke",price:40,quantity:2},
]

function calculateTotal(arr) {
   let total = 0;
   for (const product of arr) {
    let cost = product.price * product.quantity
    total = total + cost
   } 
   return total
}

console.log(calculateTotal(a));
