//insertion of element
let abc = document.createElement("p")
// undefined
abc.className = "new_box"
// 'new_box'
abc.innerHTML = "i am just created by dom"
// 'i am just created by dom'
document.querySelector(".container").append(abc)
// undefined
document.querySelector(".container").prepend(abc)
// undefined
document.querySelector(".container").before(abc)
// undefined
document.querySelector(".container").after(abc)
// undefined
document.querySelector(".container").append(abc)
// undefined


document.querySelector(".container").insertAdjacentHTML('beforebegin','<b>i am added now</b>')
// undefined
document.querySelector(".container").insertAdjacentHTML('afterbegin','<b>i am added now 2</b>')
// undefined
document.querySelector(".container").insertAdjacentHTML('beforeend','<b>i am added now 3</b>')
// undefined
document.querySelector(".container").insertAdjacentHTML('afterend','<b>i am added now 4</b>')
// undefined