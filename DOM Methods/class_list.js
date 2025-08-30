document.querySelector(".box")
/* <div class=​"box bg_green move random">​Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, error.​</div>​ */
document.querySelector(".box").classList
// DOMTokenList(4) ['box', 'bg_green', 'move', 'random', value: 'box bg_green move random']
document.querySelector(".box").className
// 'box bg_green move random'
document.querySelector(".box").classList.add("abc")
// undefined
document.querySelector(".box").className
// 'box bg_green move random abc'
document.querySelector(".box").classList.remove("abc")
// undefined
document.querySelector(".box").className
// 'box bg_green move random'
document.querySelector(".box").classList.contains("bg-green")
// false
document.querySelector(".box").classList.contains("bg_green")
// true
document.querySelector(".box").classList.toggle("toggling")
// true
document.querySelector(".box").classList.toggle("toggling")
// false
document.querySelector(".box").classList.toggle("toggling")
// true
document.querySelector(".box").classList.toggle("toggling")
// false