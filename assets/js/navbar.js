const menuBars = document.querySelector(".menu-bars");
const menu = document.querySelector(".menu-content")

const bar1 = document.querySelector(".menu-bars-1");
const bar2 = document.querySelector(".menu-bars-2");
const bar3 = document.querySelector(".menu-bars-3");

menuBars.addEventListener("click", activeBars);

function activeBars() {
    bar1.classList.toggle("activemenu-bars-1")
    bar2.classList.toggle("activemenu-bars-2")
    bar3.classList.toggle("activemenu-bars-3")

    menu.classList.toggle("menu-content-hide");
    menu.classList.toggle("menu-shadow");
    menuBars.classList.toggle("menu-fixed");
}

// Login user
const userLogin = document.querySelector(".navbar-login-a");
const userLoginMenu = document.querySelector(".navbar-login-menu");
const userProfile = document.querySelector(".navbar-profile-a");
const userProfileMenu = document.querySelector(".navbar-profile-menu");
const signOut = document.querySelector(".navbar-signout")
const signOutMenu = document.querySelector(".navbar-signout-menu");

if (localStorage.id) {

    // Login btn
    if (userLogin) {
        userLogin.style.display = "none";
        userLoginMenu.style.display = "none";
    }

    // Profile btn
    if (userProfile) {
        userProfile.style.display = "flex";
        userProfileMenu.style.display = "flex";
    }

    // Sign Out
    if (signOut) {
        signOut.style.display = "flex";
        signOutMenu.style.display = "flex";
    }

    fetch(`http://localhost:3000/users/${localStorage.id}`)
        .then(response => {
            return response.json();
        }).then(data => {
            const nameUser = document.getElementById("nameUser").textContent = `${data.username}`;
            const nameUserMenu = document.getElementById("nameUserMenu").textContent = `${data.username}`;
            const imgUser = document.getElementById("imgUser");
            const imgUserMenu = document.getElementById("imgUserMenu");
            imgUser.setAttribute("src", `${data.imguser}`);
            imgUserMenu.setAttribute("src", `${data.imguser}`);
        });
} else {

    // Login btn

    const userLogin = document.querySelector(".navbar-login-a");
    userLogin.style.display = "flex";
    const userLoginMenu = document.querySelector(".navbar-login-menu");
    userLoginMenu.style.display = "block";

    // Profile btn

    const userProfile = document.querySelector(".navbar-profile-a");
    userProfile.style.display = "none";
    const userProfileMenu = document.querySelector(".navbar-profile-menu");
    userProfileMenu.style.display = "none";

    // Sign Out

    if (signOut) {
        const signOut = document.querySelector(".navbar-signout")
        signOut.style.display = "none";
        const signOutMenu = document.querySelector(".navbar-signout-menu");
        signOutMenu.style.display = "none";
    }
}
if (signOut) {
    signOut.addEventListener("click", () => {
        localStorage.clear();
        location.href = "../index.html"
    })
}