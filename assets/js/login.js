// codigo de cambio de login a registro

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const wrapper = document.querySelector('.wrapper');

registerLink.addEventListener('click', function (event) {
    event.preventDefault();
    wrapper.classList.add('active');
    wrapper.style.height = '570px'; // Cambia el tamaño al activar registerLink
});

loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    wrapper.classList.remove('active');
    wrapper.style.height = '400px'; // Restaura el tamaño al desactivar loginLink
});


// --- --- --- LOGIN --- --- ---
let btnLogin = document.getElementById("btnLogin");
let username = document.getElementById("name-input-login");
let password = document.getElementById("password-input-login");

btnLogin.addEventListener("click", function () {
    fetch("http://localhost:3000/users")
        .then(response => {
            return response.json();
        }).then(data => {
            let user = data.find(element => {
                return element.username === username.value && element.password === password.value;
            });

            if (user) {

                localStorage.setItem('id', user.id);

                // --- --- --- TOASTIFY --- --- ---
                Toastify({
                    text: "Se ha iniciado sesión correctamente",
                    className: "toastifyGood",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    newWindow: true,
                    gravity: "bottom",
                    position: "center",
                }).showToast();

                location.href = "../index.html";
            } else {
                // --- --- --- TOASTIFY --- --- ---
                Toastify({
                    text: "Tus credenciales son incorrectas :(",
                    className: "toastifyBad",
                    style: {
                        background: "linear-gradient(90deg, rgba(255,66,66,1) 0%, rgba(219,0,0,1) 100%)",
                    },
                    gravity: "bottom",
                    position: "center",
                }).showToast();
            }
        });
});



// --- --- --- REGISTER --- --- ---
let btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function () {
    let nombreRegistro = document.getElementById("name-input-signup").value;
    let emailRegistro = document.getElementById("email-input-signup").value;
    let passwordRegistro = document.getElementById("password-input-signup").value;
    let phoneRegistro = document.getElementById("phone-input-signup").value;
    let dateRegistro = document.getElementById("date-input-signup").value;
    let checkbox = document.getElementById("checkbox").checked;
    let avisoSignUp = document.getElementById("avisoSignUp");

    if (checkbox) {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => {
                let ussernameExistent = data.find(users => users.username === nombreRegistro);

                if (ussernameExistent) {
                    avisoSignUp.innerHTML = "Lo sentimos, pero ese nombre de usuario ya existe.";
                } else {
                    let emailExistent = data.find(users => users.email === emailRegistro);

                    if (emailExistent) {
                        avisoSignUp.innerHTML = "Lo sentimos, pero este correo ya está registrado.";
                    } else {
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                username: nombreRegistro,
                                imguser: "../assets/img/VsProfile.png",
                                password: passwordRegistro,
                                email: emailRegistro,
                                phone: phoneRegistro,
                                birthday: dateRegistro,
                                money: 0,
                                posts: []
                            })
                        }).then(response => response.json())
                            .then(data => {
                                console.log('Usuario registrado como:', data);

                                // --- --- --- TOASTIFY --- --- ---
                                Toastify({
                                    text: "Se ha registrado correctamente :)",
                                    className: "toastifyGood",
                                    style: {
                                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                                    },
                                    gravity: "bottom",
                                    position: "center",
                                }).showToast();

                                avisoSignUp.innerHTML = "";

                                location.href = "../index.html";

                                nombreRegistro = '';
                                passwordRegistro = '';
                                emailRegistro = '';
                                phoneRegistro = '';
                                dateRegistro = '';
                            });
                    }
                }
            });
    } else {
        // --- --- --- TOASTIFY --- --- ---
        Toastify({
            text: "Tienes que aceptar los términos y condiciones :D",
            className: "toastifyBad",
            style: {
                background: "linear-gradient(90deg, rgba(255,66,66,1) 0%, rgba(219,0,0,1) 100%)",
            },
            gravity: "bottom",
            position: "center",
        }).showToast();
    }
});

const body = document.body
const dark = document.querySelector(".navbar-dark");
const darkMenu = document.querySelector(".navbar-dark-menu");

const logo = document.querySelector(".img-logo-img");
const wrapperTheme = document.querySelector(".wrapper");
const inputBox = document.querySelectorAll(".input-box");
const date = document.querySelector(".date");

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

darkMenu.addEventListener("click", () => {
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
        logo.src = "../assets/img/LogoWhite.png"
        body.style = `background-color: #122733;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23161A68'/%3E%3Cstop offset='1' stop-color='%23141C29'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23151b49'/%3E%3Cstop offset='1' stop-color='%23141C29'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(120 0)'%3E%3Cg %3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-104.4 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;`
        
        wrapperTheme.classList.remove("wrapper-light");
        inputBox.forEach(input => {
            input.classList.add("input-box-light");
        })
        date.style = "color: #000; filter: invert(1);"
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="IconifyId18d84db4a3438e989116"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M13 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"/><path d="M3.5 13a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M17 17a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L17 18.414A1 1 0 0 1 17 17M6 6a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L6 7.414A1 1 0 0 1 6 6m7 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M19.828 6a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 17 7.414L18.414 6a1 1 0 0 1 1.414 0m-11 12.414l-1.414 1.414A1 1 0 1 1 6 18.414L7.414 17a1 1 0 0 1 1.414 1.414"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="#ffffff" mask="url(#IconifyId18d84db4a3438e989116)"/></g></svg>`;
    } else {
        logo.src = "../assets/img/Logo.png"
        body.style = `background-color: #FFF9F6;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23050075'/%3E%3Cstop offset='1' stop-color='%23FFF9F6'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23827db6'/%3E%3Cstop offset='1' stop-color='%23FFF9F6'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(120 0)'%3E%3Cg %3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-104.4 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;`
        
        wrapperTheme.classList.add("wrapper-light");
        inputBox.forEach(input => {
            input.classList.remove("input-box-light");
        })

        date.style = "color: #000; filter: invert(0);"
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><defs><mask id="IconifyId18d48472522e626080"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><path fill="#fff" stroke="#fff" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z" /><path fill="#000" stroke="#000" d="M27 17c0 8-5 9-10 9c0 4 6.5 8 12 4s2-13-2-13" /></g></mask></defs><path fill="#ffffff" d="M0 0h48v48H0z" mask="url(#IconifyId18d48472522e626080)" /></svg>`
    }
}