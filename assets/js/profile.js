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

// Profile user

if (localStorage.id) {

    fetch(`http://localhost:3000/users/${localStorage.id}`)
        .then(response => {
            return response.json();
        }).then(data => {
            const nameUserProfile = document.getElementById("nameUserProfile").textContent = `${data.username}`;
            const imgUserProfile = document.getElementById("imgUserProfile");
            const creationsImg = document.querySelector(".creations-img");

            data.posts.forEach(post => {
                const postImg = document.createElement("img");
                postImg.setAttribute("src", `${post.image}`);
                postImg.setAttribute("alt", `Gallery ${post.name}`);

                creationsImg.appendChild(postImg);
            })
            imgUserProfile.setAttribute("src", `${data.imguser}`);

        })
}