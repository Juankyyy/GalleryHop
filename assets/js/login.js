// codigo de cambio de login a registro

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const wrapper = document.querySelector('.wrapper');

registerLink.addEventListener('click', function (event) {
    event.preventDefault();
    wrapper.classList.add('active');
    wrapper.style.height = '650px'; // Cambia el tamaño al activar registerLink
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
let avisoLogIn = document.getElementById("avisoLogIn");

btnLogin.addEventListener("click", function () {
    fetch("http://localhost:3000/users")
    .then(response => {
        return response.json();
    }).then(data => {
        let user = data.find(element => {
            return element.username === username.value && element.password === password.value;
        });

        if (user) {
            avisoLogIn.innerHTML = "";

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

btnRegistro.addEventListener("click", function() {
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