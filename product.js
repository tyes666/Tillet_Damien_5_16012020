

let search = new URLSearchParams(window.location.search);
let productId = search.get("id");


async function getArticles (){
  fetch("http://localhost:3000/api/teddies/"+ productId)
  .then(function(response) {
    return response.json()
      })
      .then(function(articles){
        let container = document.getElementById("tedd");
        let elementDiv = document.createElement("div");
        elementDiv.id="ours";
        elementDiv.classList.add("col-6","ours");
        container.appendChild(elementDiv);
        return articles;
        })
        .then(function(articles){
          let container = document.getElementById("ours");
          let elementImg = document.createElement("img");
          elementImg.classList.add("imgours");
          elementImg.src = `${articles.imageUrl}`;
          container.appendChild(elementImg);
          return articles;
        })
        .then(function(articles){
          let container = document.getElementById("tedd");
          let elementResume = document.createElement("div");
          elementResume.classList.add("col-6","description");
          elementResume.id="description";
          container.appendChild(elementResume);
          return articles;
        })
        .then(function(articles){
          let container = document.getElementById("description");
          let elementName = document.createElement("div");
          elementName.classList.add("prix");
          elementName.textContent = `${articles.name}`; 
          container.appendChild(elementName);
          return articles;
        })
        .then(function(articles){
          let container = document.getElementById("description");
          let elementPrice = document.createElement("div");
          elementPrice.classList.add("prix");
          elementPrice.textContent = `${articles.price / 100 + " €uros"}`; 
          container.appendChild(elementPrice);
          return articles;
        })
        .then(function(articles){
          let container = document.getElementById("description");
          let elementChoice = document.createElement("button");
          elementChoice.classList.add("btn","description","btn-primary");
          elementChoice.textContent = "Couleur"; 
          elementChoice.id="colorchoice";
          container.appendChild(elementChoice);         
          return articles;

        })
        .then(function(articles){
          let container = document.getElementById("description");
          let elementBasket = document.createElement("button");
          elementBasket.classList.add("btn","btn-info","description");
          elementBasket.textContent = "Ajouter au panier"; 
          elementBasket.id="panier";
          container.appendChild(elementBasket);
          let addArticle = document.getElementById ("panier");
          addArticle.addEventListener("click", function addProduct (teddySelected){
            function remplissageStockage() {
              localStorage.setItem("colors", `${articles.colors}`);
              localStorage.setItem("id", `${articles._id}`);
              localStorage.setItem("name", `${articles.name}`);
              localStorage.setItem("price", `${articles.price}`);
              localStorage.setItem("image", `${articles.imageUrl}`);
            };
            remplissageStockage();
          alert("ajouté au panier")});
          return articles;
        })
       
}
getArticles();

/*
function addToPanier(teddySelected){
  let panierContent = JSON.parse(localStorage.getItem("panierContent"));
  if (panierContent === null){
    panierContent = [];
  }
  let product = new product(id, teddySelected);
panierContent.push(product);
localStorage.setItem("panierContent", JSON.stringify(panierContent));
}





function menuCouleurs() {
  document.getElementById("colorchoice").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches("btn-primary")) {

  let textContent = (`${colors}`);
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}



<div class="ours col-6"><img src="img/ours.jpeg" alt="ours" class="imgours"></div>
        <div class="col-6 description">
        <div>Norbert</div>
        <div>50 euros</div>
        <div><button type="button" class="btn btn-primary">Couleur</button></div>
        <div><button type="button" class="btn btn-info">Ajouter au panier</button></div>
        </div>

  
    </div>


for(let i = 0; i < product.colors.length; i++){
        const option = '<option value="' + product.colors[i] + '">' + product.colors[i] + '</option>'
        console.log(option)
        couleurs.innerHTML += option;
    }

    //  Choose color
    var label = document.createElement('label');
    label.textContent = "Color : ";
    var color = document.createElement('select');
    color.id = 'choix';
    var choix = teddy.colors;
    choix.id = "couleur";

    // Creation of a for loop to display the drop-down list of Teddy colors
    for (var i = 0; i < choix.length; i++) {
    var option = document.createElement('option');
    option.textContent = choix[i];
    option.id = "couleur";
    color.appendChild(option);
    };



*/

