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
