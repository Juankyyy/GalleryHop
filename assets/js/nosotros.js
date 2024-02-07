let verMasBtn = document.querySelector(".verMasBtn");
let info = document.getElementById("info");
let joinUs = document.querySelector(".join");

verMasBtn.addEventListener("click", function () {
    info.classList.toggle("hidden");


    if (info.classList.contains("hidden")) {
        joinUs.classList.remove("hidden");
        verMasBtn.textContent = "Ver más";
    } else {
        joinUs.classList.add("hidden");
        verMasBtn.textContent = "Ver menos";
    }
});
