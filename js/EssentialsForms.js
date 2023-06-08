// werkt enkel wanneer er maar 1 van elke brand is


"use strict"

//      1           3               4
let slcBrands, divOutputBrand, chk20Watt;

// 4: variabele aanmaken met wattage waar we naar op zoek zijn
const searchWattage = 20;

const loudspeakers = [
    { brand: "Bose", model: "SoundLink Mini II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "10 W", connectivity: "Bluetooth" },
    { brand: "JBL", model: "Flip 5", frequencyResponse: "70 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" },
    { brand: "Sonos", model: "One", frequencyResponse: "60 Hz - 20 kHz", powerOutput: "6 W", connectivity: "Wi-Fi, Bluetooth" },
    { brand: "Beats", model: "Pill+", frequencyResponse: "40 Hz - 20 kHz", powerOutput: "12 W", connectivity: "Bluetooth" },
    { brand: "Marshall", model: "Stockwell II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" }
];


window.addEventListener('load', initialize);


function initialize() {
    // 1
    slcBrands = document.getElementById("brands");
    fillBrands();

    // 2: model en power output tonen van speaker met geselecteerde brand
    // wanneer men hierop klikt
    slcBrands.addEventListener("change", showDataSelectedSpeaker);
    // 3
    divOutputBrand = document.querySelector("#outputBrand");

    // 4
    chk20Watt = document.querySelector("input");
    chk20Watt.addEventListener("change", showData20WSpeakers);
}


// 3.5: weergegeven selecter verwijderen bij nieuwe selectie
function clearOutput() {
    divOutputBrand.innerHTML = "";
}

// 1
function fillBrands() {
    // door loudspeakers lussen
    for (let i = 0; i < loudspeakers.length; i++) {
        // currentBrand = huidige brand in de loop
        const currentBrand = loudspeakers[i].brand;
        // select opvullen met brands
        // steek currentBrand in                    text    en      value
        slcBrands[slcBrands.length] = new Option(currentBrand, currentBrand);
    }
}


// 3
function showDataSelectedSpeaker() {
    // 3.5
    clearOutput();
    // geef weer welk object is aangeklikt
    const selectedLoudspeaker = loudspeakers[slcBrands.selectedIndex];
    // functie oproepen om info weer te geven en model en power output meegeven
    const info = getInfoParagraph(selectedLoudspeaker.model, `Power output is ${selectedLoudspeaker.powerOutput}.`);
    // info weergeven op pagina
    divOutputBrand.appendChild(info);
}


// 4
function showData20WSpeakers() {
    clearOutput();
    // als checkbox checked is
    if (chk20Watt.checked) {
        // door elke speaker lussen
        for (let i = 0; i < loudspeakers.length; i++) {
            // huidige luidspreker opvragen
            const selectedLoudspeaker = loudspeakers[i];
            // huidige wattage opvragen
            const currentWatt = parseInt(loudspeakers[i].powerOutput);
            // als huidige wattage = aan te zoeken wattage
            if (currentWatt === searchWattage) {
                // resultaat van getInfoParagraph appenden om weer te geven en model en connectivities meegeven
                divOutputBrand.appendChild(getInfoParagraph(selectedLoudspeaker.model, `Connectivities zijn: ${selectedLoudspeaker.connectivity}`));
            }
        }
    }
}

// punt 3 en 4 had gelijkaardige code (aanmaken van paragraaf en weergeven van
// tekst). Samenbrengen onder 1 functie.

// geef model mee en ofwel poweroutput (3) ofwel connectivities (4)
function getInfoParagraph(model, extraInfo){
    // paragraaf aanmaken om text weer te geven 
    const paragraph = document.createElement("p");
    // weer te geven
    let speakerInfo = `Je hebt model ${model} geselecteerd. `;
    // geef extra info mee (3 of 4) 
    speakerInfo += extraInfo;
    // paragraaf opvullen met weer te geven text
    paragraph.textContent = speakerInfo;
    // paragraaf returnen
    return paragraph;
}