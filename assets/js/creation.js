
// Drag logic

const dragArea = document.querySelector(".drag-image");
const dragText = document.querySelector(".drag-text");
const chooseImage = document.querySelector("#choose-image");
const inputFile = document.querySelector("#input-file");
let files;

chooseImage.addEventListener("click", (e) => {
    inputFile.click();
});

inputFile.addEventListener("change", (e) => {
    files = input.files;
    showFiles(files);
});

dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Loose to load the image";
});

dragArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dragArea.classList.remove("active");
    dragText.textContent = "Drag your image here to add them to your profile";
});

dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dragArea.classList.remove("active");
    dragText.textContent = "Drag your image here to add them to your profile";
});

function showFiles(files) {
    if (files === undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file)
        }
    }
};

function processFile(file) {
    const fileType = file.type;
    const validFile = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

    if (validFile.includes(fileType)) {
        const fileReader = new FileReader();
        const idImage = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener("load", e => {
            // const imagePreiew = document.querySelector(".imagePreiew");
            // const fileContainer = document.querySelector(".file-container")
            // const spanText = document.querySelector(".span-text")
            const fileUrl = fileReader.result;

            // imagePreiew.setAttribute("src", `${fileUrl}`);
            // imagePreiew.setAttribute("alt", `${file.name}`);
            // fileContainer.setAttribute("id", `${idImage}`);
            // spanText.textContent = `${file.name}`;

            let image = `
            <di id="${idImage}" class="file-container">
                <img src="${fileUrl}" alt = "${file.name}" style= "max-width: 100px; max-height: 100px;">
                <div class="status">
                <span class="span-text">${file.name}</span>
                <span class="status-text">Loading....</span>
                </div>
            </div>`

            const html = document.querySelector(".image-preiew").innerHTML;
            document.querySelector(".image-preiew").innerHTML = image + html;

        });

        fileReader.readAsDataURL(file);
        uploadFile(file, idImage);

    } else {
        alert("No es un archivo valido")
    }
};

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
            const scroll = categoriesList.clientWidth * direction;
            categoriesList.scrollBy({ left: scroll, behavior: "smooth" });
        });
    });

    const slideButtons = () => {
        btnSlide[0].style.display = categoriesList.scrollLeft <= 0 ? "none" : "block";
        btnSlide[1].style.display = categoriesList.scrollLeft >= maxScroll ? "none" : "block";
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

// Form logic 
let nameArt = document.getElementById("nameArt");
let descriptionArt = document.getElementById("descriptionArt");
let priceArt = document.getElementById("priceArt");
let idUsser = localStorage.getItem('id');

//Algoritmo para seleccionar la categoría
let categoriesArt = document.querySelectorAll('.category-art');

categoriesArt.forEach(categoryArt => {
    categoryArt.addEventListener('click', function(event) {
        event.preventDefault();

        categoryArt.forEach(otherCategoryArt => {
            otherCategoryArt.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});

//Algoritmo para montar la publicación a la base de datos.
let btnNewCreation = document.getElementById("btnNewCreation");

btnNewCreation.addEventListener("click", function() {
    let categorySelected = document.querySelector('.category-art.selected').id;
    let nameArtValue = nameArt.value;
    let descriptionArtValue = descriptionArt.value;
    let priceArtValue = priceArt.value;

    let data = {
        categorySelected,
        nameArtValue,
        descriptionArtValue,
        priceArtValue
    }
    if (idUsser !== null) {
        fetch(`http://localhost:3000/users/${idUsser}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
});