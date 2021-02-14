async function teddies() {
    let call = await fetch("http://localhost:3000/api/teddies");
    let response = await call.json();
    return response;
  }
  teddies();

async function teddiesProducts() {
    let products = await teddies();
    let container = document.getElementById("teddiesContainer");
    products.forEach (display => {
        let content = `
        <div class="mt-4 mb-4 article col-12 col-lg-4">
          <a href="./product.html?id=${display._id}">                    
          <img class="articles" src="${display.imageUrl}" alt="${display.name}"/>
          <div class="descriptif">
          <h2 class="position">${display.name}</h2>
          <div class="prix position">Prix : ${(display.price / 100)} €uros</div>
         </a>
         </div>
          </div>


      `
      container.innerHTML += content; 
    });
    
       
  }
teddiesProducts();
