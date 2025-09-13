// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

const random = ()=>{
return Math.floor(Math.random()*10+1)
}



async function placeOrder(orderID) {
    return new Promise((resolve, reject) => {
        console.log(`Order No. ${orderID} is placed`);
        let time = random();
        setTimeout(() => {
            resolve(`Order No. ${orderID} is confirmed in ${time} seconds and ready to be shipped`)
        }, time*1000);
  
    })
    
}

async function main() {
  let confirmation = await placeOrder("aer123");
  console.log(confirmation);
}

main();