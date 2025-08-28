console.log("Script initiated")
let boxes = document.getElementsByClassName("box")
function getRandomColor(){
    let val1 = Math.ceil(Math.random()*254);
    let val2 = Math.ceil(Math.random()*254);
    let val3 = Math.ceil(Math.random()*254);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e => {
    e.style.background = getRandomColor()
    e.style.color = getRandomColor()
    
    e.innerText = e.style.background
});
console.log()
