//basic inner view or change methods
document.querySelector(".box")
document.querySelector(".box").innerHTML
// 'Hello i am first'
document.querySelector(".container").innerHTML
// '\n        <div class="box">Hello i am first</div>\n        <div class="box">Hello i am second</div>\n    '
document.querySelector(".container").innerText
// 'Hello i am first\nHello i am second'
document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".box").textContent
// 'Hello i am first'
// document.body
// <body>​…​</body>​
document.body.innerText
// 'Hello i am first\nHello i am second'
document.body.innerHTML
// '\n    <div class="container">\n        <div class="box">Hello i am first</div>\n        <div class="box">Hello i am second</div>\n    </div>\n\n\x3Cscript src="script1.js">\x3C/script>\n'
document.querySelector(".container").hidden
// false
document.querySelector(".container").hidden = true
// true
document.querySelector(".container").hidden
// true
document.querySelector(".box").innerText
// 'Hello i am first'
document.querySelector(".container").hidden = false
// false
document.querySelector(".box").innerText = "I have changed"
// 'I have changed'
document.querySelector(".box").innerText = "I have permanently changed"