"use strict"

// globale variabelen declareren
let btnBmi;
let btnMessage;

window.addEventListener('load',initialize);

// groepering functies
function initialize() {
    bindElements();
    setEvents();
}

// 1/7: roep buttons op in DOM
function bindElements(){
    btnBmi = document.getElementById("bmi");
    btnMessage = document.getElementById("Message");
}


function setEvents(){
// 2: koppel klikevent aan button en roep functie onButtonClick op 
// (die op zijn beurt calculateBMI oproept)
// (calculateBmi rechtstreeks oproepen werkt niet)
    btnBmi.addEventListener('click',onButtonClick);
// 8: koppel dubbelklik event aan button en roep anonieme functie op
    btnMessage.addEventListener("dblclick", function () {alert("Warning!");});
                        // arrow variant    
                            // ("dblclick", () => {alert("Warning!");});
                        // arrow variant zonder accolades 
                        // (enkel mogelijk bij  statement)
                            // ("dblclick", () => alert("Warning!"));
}

// roep functie calculateBmi op (geef ook lengte (in meter) en gewicht argumenten op)
function onButtonClick(){
    // 5
    calculateBmi(1.65,68);
}

// 3: geef argumenten mee en bereken BMI
function calculateBmi(length, weigth){

    // 6: ga na of er genoeg argumenten zijn
    // wanneer argumenten kleiner zijn dan 2 ...
    if(arguments.length < 2) {
        // 4: ... geef alert ...
        alert("Je gaf te weinig argumenten mee.");
        // ... en stop met uitvoeren functie
        return;
    }
    const bmi = weigth / (length * length);
    // geef resultaat weer in console (of alert)
    alert(bmi);
}

