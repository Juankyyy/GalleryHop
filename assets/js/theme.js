const body = document.body
const dark = document.querySelector(".navbar-dark");
const darkMenu = document.querySelector(".navbar-dark-menu");

let theme;
let count = localStorage.contTheme;

if (!localStorage.theme) {
    localStorage.setItem("theme", "light")
    localStorage.setItem("contTheme", 1);
}

assignTheme();
dark.addEventListener("click", () => {
    count++;
    
    if (count % 2 == 0) {
        theme = "dark";
    } else {
        theme = "light";
    }
    
    localStorage.setItem("theme", theme)
    localStorage.setItem("contTheme", count);
    assignTheme();
})

function assignTheme() {
    if(localStorage.theme == "dark") {
        body.className = "dark"
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="IconifyId18d84db4a3438e989116"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M13 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"/><path d="M3.5 13a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M17 17a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L17 18.414A1 1 0 0 1 17 17M6 6a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L6 7.414A1 1 0 0 1 6 6m7 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M19.828 6a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 17 7.414L18.414 6a1 1 0 0 1 1.414 0m-11 12.414l-1.414 1.414A1 1 0 1 1 6 18.414L7.414 17a1 1 0 0 1 1.414 1.414"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="#ffffff" mask="url(#IconifyId18d84db4a3438e989116)"/></g></svg>`;
    } else {
        body.className = "light"
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><defs><mask id="IconifyId18d48472522e626080"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><path fill="#fff" stroke="#fff" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z" /><path fill="#000" stroke="#000" d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId18d48472522e626080)" /></svg>`
    }
}