// Categories logic

// Categories slider

const Slider = () => {
    const categoriesList = document.querySelector(".container-categories .categorie");
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
            const scroll = (categoriesList.clientWidth / 5) * direction;
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