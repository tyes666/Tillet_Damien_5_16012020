

let teddySelected = JSON.parse(localStorage.getItem("teddySelected"));

let container = document.getElementById("tedd");
let elementDiv = document.createElement("div");
elementDiv.id="resume";
elementDiv.classList.add("card");
container.appendChild(elementDiv);

for (let i=0; i<teddySelected.length; i++){


let contenant = document.getElementById("resume");
let contenantProduct = document.createElement("div");
contenant.appendChild(contenantProduct);

let resume = document.getElementById("resume");
let oursImg = document.createElement("img");
let image = localStorage.getItem('imageUrl');
//oursImg.id="oursImg";
oursImg.classList.add("articlepanier","col-12","oursImg");
oursImg.src = teddySelected[i].imageUrl;
contenantProduct.appendChild(oursImg);

let oursResume = document.createElement("div");
//oursResume.id="oursResume";
oursResume.classList.add("oursResume","col-2");
contenant.appendChild(oursResume);

   
let containerProduct = document.getElementsByClassName("oursResume");
let oursName = document.createElement("div");
let name = localStorage.getItem("name");
oursName.classList.add("name");
oursName.textContent = teddySelected[i].name;
oursResume.appendChild(oursName);



let containerPrice = document.getElementById("resume");
let oursPrice = document.createElement("div");
let price = localStorage.getItem("price");
oursPrice.classList.add("col-2")
oursPrice.id="price";
oursPrice.textContent = teddySelected[i].price / 100 + " €uros";
containerPrice.appendChild(oursPrice);

let countEl = document.getElementById("count");
function plus(){
oursQte.value ++;
countEl.value = oursQte;
}
function minus(){
if (oursQte => 0) {
oursQte.value --;
countEl.value = oursQte;
}
}

let oursMinus = document.createElement("input");
oursMinus.value= "-";
oursMinus.type= "button";
oursMinus.addEventListener("click", minus);
contenant.appendChild(oursMinus)

let oursPlus = document.createElement("input");
oursPlus.value= "+";
oursPlus.type= "button";
oursPlus.addEventListener("click", plus);
contenant.appendChild(oursPlus)

let oursQte = document.createElement("input");
oursQte.id="count";
oursQte.value = "1";
contenant.appendChild(oursQte);

localStorage.setItem("qte", oursQte.value);

let containerTotal = document.getElementById("resume");
let priceTotal = document.createElement("div");
priceTotal.value="count * price";
containerTotal.appendChild(priceTotal);


}




let nameText = document.createElement("label");
nameText.classList.add("userName","formulaire");
nameText.textContent = "Veuillez entrer votre nom";
container.appendChild(nameText);

let nameUser = document.createElement("input");
nameUser.id="nameUser";
container.appendChild(nameUser);

let firstNameText = document.createElement("label")
firstNameText.classList.add("userFirstName","formulaire")
firstNameText.textContent = "Veuillez entrer votre prénom";
container.appendChild(firstNameText);

let firstNameUser = document.createElement("input");
firstNameUser.id="firstNameUser";
container.appendChild(firstNameUser);

let adresseText = document.createElement("label")
adresseText.classList.add("userAdresse","formulaire")
adresseText.textContent = "Veuillez entrer votre adresse";
container.appendChild(adresseText);

let adresseUser = document.createElement("input");
adresseUser.id="adresseUser"
container.appendChild(adresseUser);

let villeText = document.createElement("label")
villeText.classList.add("userVille","formulaire")
villeText.textContent = "Veuillez entrer votre ville";
container.appendChild(villeText);

let villeUser = document.createElement("input");
villeUser.id="userVille";
container.appendChild(villeUser);

let mailText = document.createElement("label")
mailText.classList.add("userMail","formulaire")
mailText.textContent = "Veuillez entrer votre email";
container.appendChild(mailText);

let mailUser = document.createElement("input");
mailUser.id="userMail";
container.appendChild(mailUser);


let buttonCommand = document.createElement("button");
buttonCommand.classList.add("btn","btn-primary","btn-commande");
buttonCommand.id="btn-envoi";
buttonCommand.type = "submit";
buttonCommand.textContent ="Commander";
container.appendChild(buttonCommand);


 
let sendCommand = document.getElementById("btn-envoi");
sendCommand.addEventListener("click", function addUser (){
  let contact = {
    
    firstName : document.getElementById("nameUser").value,
    lastName: document.getElementById("firstNameUser").value,
    address: document.getElementById("adresseUser").value,   
    city: document.getElementById("userVille").value,
    email: document.getElementById("userMail").value,
  };
          localStorage.setItem("contact", JSON.stringify(contact)); 
           console.log(contact)            
});


  


  
/*




let form = document.createElement("form");
form.method="post";
form.id="form";
container.appendChild(form);



let userOrder = {
    contact: {}

};
let contact = {
    
    userName: document.getElementById("nameUser").value,
    userFirstName: document.getElementById("firstNameUser").value,
    userAddress: document.getElementById("adresseUser").value,
    userCp: document.getElementById("cpUser").value,
    userVille: document.getElementById("userVille").value,
    userMail: document.getElementById("userMail").value,
  };
  
alert(userOrder);}















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