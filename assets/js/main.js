function particlesLight() {
    particlesJS(
        {
            "particles": {
                "number": {
                    "value": 130,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#000",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": false
        }
    )
}

function particlesDark() {
    particlesJS(
        {
            "particles": {
                "number": {
                    "value": 130,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#fff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": false
        }
    )
}

const body = document.body
const dark = document.querySelector(".navbar-dark");
const imgGH = document.querySelector(".logo-text-img");
let theme;
let count = localStorage.getItem("contTheme");

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
    assignTheme()
})

function assignTheme() {
    if (localStorage.theme == "dark") {
        body.className = "dark";
        imgGH.src = "./assets/img/GHTextWhite.png"
        particlesDark();
    } else {
        body.className = "light";
        imgGH.src = "./assets/img/GHText.png";
        particlesLight();
    }
}

// Slider logic

let categories=document.getElementById("categories-content")

fetch ("http://localhost:3000/users")
.then((result)=>result.json())
.then((data)=>{

    for(let i in users.posts )
    if (art_type=Acrilico) ;
    const firstPost = firstUser.posts[0];

    let postImg = document.createElement("img");
    postImg.src = firstPost.image;
    postImg.alt = firstPost.name; 
    modalContent.appendChild(postImg);


    let divCategoria1 = document.createElement("div")
    categories.appendChild(divCategoria1);
    
        let Categoria1=document.createElement("div")
        divCategoria1.appendChild(Categoria1);
        
        let img1Cate1 = document.createElement("img");
        img1Cate1.src = 
        Categoria1.appendChild(img1Cate1);
        
        let img2Cate1 = document.createElement("img");
        img2Cate1.src = 
        Categoria1.appendChild(img2Cate1);
        
        let img3Cate1 = document.createElement("img");
        img3Cate1.src = 
        Categoria1.appendChild(img3Cate1);
        
        let img4Cate1 = document.createElement("img");
        img4Cate1.src = 
        Categoria1.appendChild(img4Cate1);
        
        let img5Cate1 = document.createElement("img");
        img5Cate1.src = 
        Categoria1.appendChild(img5Cate1);
        
        let img6Cate1 = document.createElement("img");
        img6Cate1.src = 
        Categoria1.appendChild(img6Cate1);
    

        let divCategoria2 = document.createElement("div")
    categories.appendChild(divCategoria2);
    
        let Categoria2=document.createElement("div")
        divCategoria2.appendChild(Categoria2);
        
        let img1Cate2 = document.createElement("img");
        img1Cate2.src = 
        Categoria2.appendChild(img1Cate2);
        
        let img2Cate2 = document.createElement("img");
        img2Cate2.src = 
        Categoria2.appendChild(img2Cate2);
        
        let img3Cate2 = document.createElement("img");
        img3Cate2.src = 
        Categoria2.appendChild(img3Cate2);
        
        let img4Cate2 = document.createElement("img");
        img4Cate2.src = 
        Categoria2.appendChild(img4Cate2);
        
        let img5Cate2 = document.createElement("img");
        img5Cate1.src = 
        Categoria2.appendChild(img1Cate2);
        
        let img6Cate2 = document.createElement("img");
        img6Cate1.src = 
        Categoria2.appendChild(img1Cate2);
    })
    



// logic v2

fetch('http://localhost:3000/users')
                .then(response => response.json())
                .then(data => {
                    allPosts = data.flatMap(user => user.posts);

                    allPosts.forEach(post => {
                        if (post.id === postElement.id) {
                            console.log(post);

                        }
                    })
                });