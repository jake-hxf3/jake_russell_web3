console.log("JS file connected");

/* Variables */
const burger = document.querySelector("#burger");
const nav = document.querySelector("#burger-con");
const header = document.querySelector("#main-header");

/* Functions */
function toggleMenu() {
    console.log("burger clicked");
    nav.classList.toggle("collapsible");
    header.classList.toggle("collapsible");
    burger.classList.toggle("clicked");
}

/* Event Listener */
burger.addEventListener("click", toggleMenu);