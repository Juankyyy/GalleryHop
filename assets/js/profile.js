const menuBars = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu-content");

const bar1 = document.querySelector(".menu-bars-1");
const bar2 = document.querySelector(".menu-bars-2");
const bar3 = document.querySelector(".menu-bars-3");

const buttons = document.querySelectorAll(".btn");
const buttonsTitle = document.querySelector(".creations-title");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(buttonR => {
            buttonR.classList.remove("btn-selected");
        })

        button.classList.add("btn-selected");
        const title = button.children[0].innerHTML;
        buttonsTitle.children[0].innerHTML = title
    })
})

menuBars.addEventListener("click", activeBars);

function activeBars() {
    bar1.classList.toggle("activemenu-bars-1")
    bar2.classList.toggle("activemenu-bars-2")
    bar3.classList.toggle("activemenu-bars-3")

    menu.classList.toggle("menu-content-hide");
    menu.classList.toggle("menu-shadow");
    menuBars.classList.toggle("menu-fixed");
}