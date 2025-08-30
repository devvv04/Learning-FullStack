//attribute and css methods
document.querySelector(".box").hasAttribute("style")
// true
document.querySelector(".box").getAttribute("style")
// 'width: auto;'
document.querySelector(".box").setAttribute("style","border: 2px solid red;")
// undefined
document.querySelector(".box").removea
// undefined
document.querySelector(".box").removeAttribute("style")
// undefined
document.querySelector(".box").hasAttribute("style")
// false
document.querySelector(".container").attributes
// NamedNodeMap {0: class, class: class, length: 1}
document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Dev'}
document.querySelector(".box").matches(".box")
// true
document.querySelector(".box").matches(".container")
// false