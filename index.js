//fetch("http://localhost:3000/api/teddies")
  //  .then (return response)


async function teddies() {
    let call = await fetch("http://localhost:3000/api/teddies");
    let response = await call.json();
    return response;
  }
  teddies();
 //array.forEach(element => {
   
 //});
async function teddiesProducts() {
    let products = await teddies();
    let container = document.getElementById("teddiesContainer");
    products.forEach (display => {
        let content = `
        <div class="mt-4 mb-4 article col-12 col-lg-4">        
          <a href="./product.html?id=${display._id}">
          <h2>${display.name}</h2>
          <img class="articles" src="${display.imageUrl}" alt="${display.name}"/>
          <div>Prix : ${(display.price / 100)} €uros</div>
          </div>


      `
      container.innerHTML += content; 
    });
    
       
  }
teddiesProducts();
  
/* 
<div class="col-12 col-lg-4">
<div class="card mb-4 border-primary shadow">
  <img src="${display.imageUrl}" alt="Image du produit" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">${display.name}</h5>
    <p><strong>Prix : ${(display.price / 100)} €</strong></p>
    <a href="./product.html?id=${display._id}" class="btn btn-primary">Plus d'informations</a>
  </div>
</div>
</div>
</div>
<div class="mt-4 mb-4">
          <div class="article col-12 col-lg-4">
          <a href="./product.html?id=${display._id}">
          <h2>${display.name}</h2>
          <img class="articles" src="${display.imageUrl}" alt="${display.name}"/>
          <p>Prix : ${(display.price / 100)} €uros</p>
          </div></div>*/