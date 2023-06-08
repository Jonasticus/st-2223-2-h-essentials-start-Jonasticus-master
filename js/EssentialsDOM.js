"use strict";

//declare global vars here

//wait for document load
window.addEventListener('load',initialize);

function initialize() {

    // zoeken in document of element "feedback" bestaat, en in variabele divFeedback steken
    const divFeedback = document.getElementById("feedback");
    // inhoud variabele updaten met nieuwe tekst
    divFeedback.textContent = "Dit is de nieuwe waarde.";


    // zoeken in doc of id "howest" en "#graduaatProgrammeren" bestaan, en in variabele "anchHowest" en "ancAssociatesDegreeProgramming" steken
    const ancHowest = document.querySelector("#howest");
    const ancAssociatesDegreeProgramming = document.querySelector("#graduaatProgrammeren");
    
    //href toevoegen aan variabelen
    ancHowest.href = "https://www.howest.be";
    // tekst van link zelf toevoegen (zodat er iets is om op te klikken)
    ancHowest.textContent = "Howest";

    // alternatieve manier van href toevoegen
    ancAssociatesDegreeProgramming.setAttribute("href","https://www.howest.be/nl/opleidingen/graduaat/programmeren")
    // tekst van link zelf toevoegen
    ancAssociatesDegreeProgramming.textContent = "Graduaat Programmeren"


    // allereerste button zoeken en in variabele btnChange steken
    const btnChange = document.querySelector("button");
    // klasse van inhoud variabele updaten met nieuwe klasse
    btnChange.setAttribute("class", "btn-pink");
    // alternatieve manier van klasse aanpassen
    // btnChange.className = "btn-pink";


    // maak nieuwe (lege) p-tag aan en steek in var "parNewText"
    const parNewText = document.createElement("p");
    // p-tag opvullen
    parNewText.textContent = "Dit is een paragraaf aangemaakt in Javascript.";
    // vraag eerste body op en steek in var "body"
    const body = document.querySelector("body");
    // voeg p-tag (child) toe aan body (parent)
    body.appendChild(parNewText);



}



