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