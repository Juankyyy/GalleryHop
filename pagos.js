const button = document.getElementById("button");
const galleryContainer = document.getElementById("gallery");
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");

fetch("http://localhost:3000/users")
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    button.addEventListener("click", function () {
      const firstUser = data[0];
      const firstPost = firstUser.posts[0];

      // Limpia el contenido existente del modal
      modalContent.innerHTML = "";

      let postId = document.createElement("h2");
      postId.innerText = `ID: ${firstPost.id}`;
      modalContent.appendChild(postId);

      let postImg = document.createElement("img");
      postImg.src = firstPost.image;
      postImg.alt = firstPost.name; // Agrega un atributo alt
      modalContent.appendChild(postImg);

      let postName = document.createElement("h3");
      postName.innerText = `Name: ${firstPost.name}`;
      modalContent.appendChild(postName);

      let postPrice = document.createElement("h3");
      postPrice.innerText = `Price: $${firstPost.price} dll`;
      modalContent.appendChild(postPrice);

      let postbutton = document.createElement("button");
      postbutton.innerText = "Confirmar compra";
      modalContent.appendChild(postbutton);

      

      
      let moneyDispo = firstUser.money;


      postbutton.addEventListener("click", function () {
        if (parseFloat(moneyDispo) >= parseFloat(firstPost.price)) {
          alert("Su compra fue realizada con éxito");
        } else {
          alert("Saldo insuficiente. Le falta $" + (parseFloat(firstPost.price) - parseFloat(moneyDispo)) + "dll");
        }
      });

      // Mostrar el modal
      modal.style.display = "block";
    });
  });

// Cierra el modal cuando el usuario hace clic fuera de él
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
