
let url = "https://superheroapi.com/api/3527859777262512/";

// ***************************************************************************************************************
// Exemple 1.
// Je vais également varier les méthodes d'insertion dans le DOM
// url pour Iron man
let url_test = "https://www.superheroapi.com/api.php/3527859777262512/346";
let boutton1 = document.getElementById("boutton1");

function addPerso(json){
    console.log("Le première boutton bien d'être cliqué");
    console.log(json);
    let reponse = document.createElement("div");
    reponse.innerHTML = "<p>" + json.name + "</p>";
    document.body.insertBefore(reponse, boutton1.nextSibling);
    console.log(json.name);
}

boutton1.addEventListener("click", function () {
    fetch('https://www.superheroapi.com/api.php/3527859777262512/346')
        .then(response => response.json())
        .then(addPerso)
    });

// ***************************************************************************************************************
//Exemple 2:

let boutton2 = document.getElementById("boutton2");

const getInfo = async() =>{
    let response = await fetch('https://www.superheroapi.com/api.php/3527859777262512/346');
    let data = await response.json();
    addPerso(data)
}


boutton2.addEventListener("click", function () {
    getInfo();
    });


// ***************************************************************************************************************
//Exemple 3:
// Avec gestion des erreurs
/*
const getInfo = async function(){
    let response = await fetch('https://www.superheroapi.com/api.php/3527859777262512/346');
    let data = await response.json();
    addPerso(data)
};

let boutton2 = document.getElementById("boutton2");
boutton2.addEventListener("click", function () {
    getInfo();
});

*/

