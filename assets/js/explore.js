// Categories logic

const categoriesItem = ["Grafito", "Carbon", "Lápices de colores", "Tinta", "Óleo", "Acrílico", "Acualera", "Gouache", "Temple", "Pintura al pastel", "Talla en madera", "Modelado en arcilla", "Escultura en piedra", "Fundición de bronce", "Ilustración digital", "Arte 3D", "Fotografía", "Edición fotográfica", "Grafitti", "Tecnica mixta"];

const categoriesList = document.querySelector(".container-categories .categorie");
categoriesItem.forEach(categorie => {
    if (categorie.length > 8) {
        Item = `<p class="category-item wide">${categorie}</p>`;
    } else {
        Item = `<p class="category-item">${categorie}</p>`;
    }
    const html = document.querySelector(".categorie").innerHTML;
    document.querySelector(".categorie").innerHTML = Item + html;
})

// Categories slider

const Slider = () => {
    const btnSlide = document.querySelectorAll(".container-categories .btn-desplace");
    const sliderScrollbar = document.querySelector(".container-categories .categories-scrollbar");
    const scrollbarBar = sliderScrollbar.querySelector(".scrollbar-bar");
    const maxScroll = categoriesList.scrollWidth - categoriesList.clientWidth;

    scrollbarBar.addEventListener("mousedown", (e) => {
        const starX = e.clientX;
        const barPosition = scrollbarBar.offsetLeft;

        const MouseMoved = (e) => {
            const endX = e.clientX - starX;
            const newBarPosition = barPosition + endX;
            const maxBarPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarBar.offsetWidth;

            const bounderPosition = Math.max(0, Math.min(maxBarPosition, newBarPosition));
            const scrollPosition = (bounderPosition / maxBarPosition) * maxScroll;

            scrollbarBar.style.left = `${bounderPosition}px`;
            categoriesList.scrollLeft = scrollPosition;
        }

        const MouseUp = () => {
            document.removeEventListener("mousemove", MouseMoved);
            document.removeEventListener("mouseup", MouseUp);
        }

        document.addEventListener("mousemove", MouseMoved);
        document.addEventListener("mouseup", MouseUp);
    });

    btnSlide.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scroll = (categoriesList.clientWidth / 4.5) * direction;
            categoriesList.scrollBy({ left: scroll, behavior: "smooth" });
        });
    });

    const slideButtons = () => {
        btnSlide[0].style.display = categoriesList.scrollLeft <= 0 ? "none" : "grid";
        btnSlide[1].style.display = categoriesList.scrollLeft >= maxScroll ? "none" : "grid";
    };

    const updateScrollbar = () => {
        const scrollPosition = categoriesList.scrollLeft;
        const scrollBarPosition = (scrollPosition / maxScroll) * (sliderScrollbar.clientWidth - scrollbarBar.offsetWidth);
        scrollbarBar.style.left = `${scrollBarPosition}px`;
    }

    categoriesList.addEventListener("scroll", () => {
        slideButtons();
        updateScrollbar();
    });

}

window.addEventListener("load", Slider);

// Select categories

const categoriesBtn = document.querySelectorAll(".category-item");
categoriesBtn.forEach(categorie => {
    categorie.addEventListener("click", () => {
        categoriesBtn.forEach(categorie2 => {
            categorie2.classList.remove("selected");
        })
        categorie.classList.add("selected");
    })
})

//Logic for posts
function showRandomPosts () {
    fetch('http://localhost:3000/users')
    .then(response => {
        return response.json();
    }).then(data => {
        let allPosts = data.flatMap(user => user.posts);

        const postsMezclados = allPosts.sort(() => Math.random() - 0.5);

        let gallery = document.getElementById("gallery");

        postsMezclados.forEach(post => {
            let postElement = document.createElement("div");
            postElement.classList.add("grid-item");
            postElement.setAttribute("style", `background-image: url(${post.image});`);

            gallery.appendChild(postElement);
        });
    })
}

showRandomPosts();