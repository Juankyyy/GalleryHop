// Categories logic

const categoriesItem = ["Grafito", "Carboncillo", "Lápices de colores", "Tinta", "Óleo", "Acrilico", "Acuarela", "Gouache", "Temple", "Pastel", "Talla en madera", "Arcilla", "Escultura en piedra", "Fundición de bronce", "Ilustración digital", "Arte 3D", "Fotografia", "Edición fotográfica", "Grafitti", "Mixta"];
const categoriesList = document.querySelector(".container-categories .categorie");

categoriesItem.forEach(categorie => {
    const itemClass = categorie.length > 8 ? "category-item wide" : "category-item";
    const item = `<p class="${itemClass}">${categorie}</p>`;
    categoriesList.innerHTML += item;
});

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
/*function showRandomPosts () {
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
            postElement.setAttribute("style", `background-image: url(${post.image})`);
            postElement.setAttribute("name", `${post.art_type}`);

            gallery.appendChild(postElement);
        });
    })
}*/

let allPosts;

function showRandomPosts() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            allPosts = data.flatMap(user => user.posts);
            filterPosts("all");
        });
}

function filterPosts(category) {
    const gallery = document.getElementById("gallery");

    // Limpiar la galería antes de agregar los elementos filtrados

    gallery.innerHTML = "";

    // Filtrar posts según la categoría seleccionada

    const filteredPosts = category == "all" ? allPosts : allPosts.filter(post => post.art_type == category);

    // Crear elementos de div para los posts filtrados

    filteredPosts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.classList.add("grid-item");
        postElement.setAttribute("id", `${post.id}`);
        postElement.style.backgroundImage = `url(${post.image})`;
        postElement.setAttribute("name", `${post.art_type}`);

        // Función para mostrar los datos del post

        const containerModal = document.querySelector(".container-modal");
        const myModal = document.getElementById("myModal");
        const modalImg = document.getElementById("modal-img");
        const btnBuy = document.querySelector(".btn-buy");

        const namePost = document.getElementById("namePost");
        const descriptionPost = document.getElementById("descriptionPost");
        const categoriePost = document.getElementById("categoriePost");
        const pricePost = document.getElementById("pricePost");


        postElement.addEventListener("click", () => {
            fetch('http://localhost:3000/users')
                .then(response => response.json())
                .then(data => {
                    allPosts = data.flatMap(user => user.posts);

                    allPosts.forEach(post => {
                        if (post.id === postElement.id) {
                            modalImg.setAttribute("src", `${post.image}`);
                            console
                            namePost.textContent = `${post.name}`;
                            descriptionPost.textContent = `${post.description}`;
                            categoriePost.textContent = `${post.art_type}`;
                            pricePost.textContent = `${post.price} USD`;
                        }
                    })

                    containerModal.style.display = "flex";

                });
        })

        window.onclick = function (event) {
            if (event.target === containerModal) {
                containerModal.style.display = "none";
            }
        };

        gallery.appendChild(postElement);
    });
}

// Agregar eventos de clic a los botones de categoría

categoriesBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const category = this.textContent; // Obtener la categoría del texto del botón
        filterPosts(category);
    });
});

// Mostrar todos los posts al cargar la página
showRandomPosts();