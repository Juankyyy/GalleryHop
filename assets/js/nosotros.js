const verMasBtn = document.querySelector(".verMasBtn");
const info = document.getElementById("info");
const joinUs = document.querySelector(".join");

verMasBtn.addEventListener("click", () => {
    info.classList.toggle("hidden");

    if (info.classList.contains("hidden")) {
        joinUs.classList.remove("hidden");
        verMasBtn.textContent = "Ver más";
    } else {
        verMasBtn.textContent = "Ver menos";
    }
});

const titleDev = document.querySelector(".developers-gallery-text")

assignTheme()
dark.addEventListener("click", ()=> {
    assignTheme();
})

function assignTheme() {
    if (localStorage.theme = "dark") {
        titleDev.style = "color: #fff;"
    } else {
        titleDev.style = "color: #000;"
    }
}