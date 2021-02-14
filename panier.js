let container = document.getElementById("tedd");
let elementDiv = document.createElement("div");
elementDiv.id="resume";
elementDiv.classList.add("card");
container.appendChild(elementDiv);

let containerImg = document.getElementById("resume");
let oursImg = document.createElement("img");
let image = localStorage.getItem("image");
oursImg.id="oursImg";
oursImg.classList.add("articlepanier","col-2");
oursImg.src = `${image}`;
containerImg.appendChild(oursImg);

let oursResume = document.createElement("div");
oursResume.id="oursResume";
containerImg.appendChild(oursResume);

let containerName = document.getElementById("oursResume");    
let oursName = document.createElement("div");
let name = localStorage.getItem("name");
oursName.classList.add("name");
oursName.textContent = `${name}`;
containerName.appendChild(oursName);

let containerColor = document.getElementById("oursResume");    
let oursColor = document.createElement("div");
let colors = localStorage.getItem("colors");
oursColor.textContent = `${colors}`;
containerColor.appendChild(oursColor);

let containerPrice = document.getElementById("resume");
let oursPrice = document.createElement("div");
let price = localStorage.getItem("price");
oursPrice.textContent = `${price / 100 + " €uros"}`;
containerPrice.appendChild(oursPrice);

let countEl = document.getElementById("count");
function plus(){
    oursQte.value ++;
countEl.value = "oursQte";
}
function minus(){
if (oursQte => 0) {
    oursQte.value --;
countEl.value = "oursQte";
}
}

let oursMinus = document.createElement("input");
oursMinus.value= "-";
oursMinus.type= "button";
oursMinus.addEventListener("click", minus);
containerImg.appendChild(oursMinus)
let oursPlus = document.createElement("input");
oursPlus.value= "+";
oursPlus.type= "button";
oursPlus.addEventListener("click", plus);
containerImg.appendChild(oursPlus)

let oursQte = document.createElement("input");
oursQte.id="count";
oursQte.value = "1";
containerImg.appendChild(oursQte);

localStorage.setItem("qte", oursQte.value);

let containerTotal = document.getElementById("resume");
let priceTotal = document.createElement("div");
containerTotal.appendChild(priceTotal);



//


/*
let count = 0;
let countEl = document.getElementById("count");
function plus(){
count++;
countEl.value = count;
}
function minus(){
if (count > 0) {
count--;
countEl.value = count;
}
}





containerImg.appendChild(oursQte);

let oursTotal =document.createElement("div");
containerImg.appendChild(oursTotal);












//container2.appendChild(oursPrice);
//
//


let container5 = document.getElementById("test");
let elementImg = document.createElement("img");
let image = localStorage.getItem("image");
elementImg.classList.add("articlepanier","col-2");
elementImg.src = `${image}`;
container5.appendChild(elementImg);


let elementName2 = document.getElementById("test");    
let elementName = document.createElement("div");
let name = localStorage.getItem("name");
elementName.classList.add("col-2","choice");
elementName.textContent = `${name}`;
container.appendChild(elementName);


document.getElementsByClassName("choice");
let elementColor = document.createElement("div");
let colors = localStorage.getItem("colors");
elementColor.textContent = `${colors}`;
container.appendChild(elementColor);




     <div class="card">
               <div><img src="img/ours.jpeg" class="articlepanier col-2"></div>
               <div class="col-2 choice"><div>Name</div><div>Color</div><div>Supprimer</div></div>
               <div class="col-2">price</div>
               <div class="col-2">Bouton + -</div>
               <div class="col-2">prix total ligne</div>
            </div>

            <div class="total"><div>total général</div><div>total euros</div></div>

            <div>Commander bouton</div>


            let elementImg = document.createElement("img");
let image = localStorage.getItem("image");
elementImg.classList.add("articlepanier","col-2");
elementImg.src = `${image}`;
            */