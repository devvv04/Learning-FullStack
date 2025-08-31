//to show event bubbling
// document.querySelector(".child").addEventListener("click",()=>{
//     alert("child class is clicked")
// })

// document.querySelector(".child_container").addEventListener("click",()=>{
//     alert("child_container class is clicked")
// })

// document.querySelector(".container").addEventListener("click",()=>{
//     alert("container class is clicked")
// })


//to fix event bubbling:
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child class is clicked")
})

document.querySelector(".child_container").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child_container class is clicked")
})

document.querySelector(".container").addEventListener("click", () => {
    alert("container class is clicked")
})

 function getRandomColor(){
    let val1 = Math.ceil(Math.random()*254);
    let val2 = Math.ceil(Math.random()*254);
    let val3 = Math.ceil(Math.random()*254);
    return `rgb(${val1}, ${val2}, ${val3})`
}
 let a =   setInterval(() => {
        document.querySelector(".child").style.background = getRandomColor(); 
        document.querySelector(".child").style.color = getRandomColor(); 
    }, 1000);

    // console.log(a);
    // clearInterval(1);

    

