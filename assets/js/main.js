const menu = document.querySelector(".menu-bars");

const bar1 = document.querySelector(".menu-bars-1");
const bar2 = document.querySelector(".menu-bars-2");
const bar3 = document.querySelector(".menu-bars-3");

menu.addEventListener("click", activeBars);

function activeBars() {
    console.log("a");
    bar1.classList.toggle("activemenu-bars-1")
    bar2.classList.toggle("activemenu-bars-2")
    bar3.classList.toggle("activemenu-bars-3")
}