
let btn = document.querySelector(".button");

// btn.addEventListener("click",()=>{
//     alert("button is clicked");
// });

// btn.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "red";
// })

// btn.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML = "I am double clicked now"
// })

btn.addEventListener("mouseover", () => {
    document.querySelector(".box").innerHTML = "Mouse entered the button area"
})
btn.addEventListener("mouseout", () => {
    document.querySelector(".box").innerHTML = "Mouse left the button area"
})

// btn.addEventListener("keydown", (event) => {
//     console.log("Key pressed: " + event.key);
// });

