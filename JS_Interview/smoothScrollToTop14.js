// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,           // scroll to top of the page
        // behavior: "auto" 
        behavior : "smooth"
    });
}
// Example usage: scroll to top when a button is clicked
const btn = document.createElement("button");
btn.innerText = "Scroll to Top";
btn.onclick = smoothScrollToTop;
document.body.appendChild(btn);
