"use strict"

let musicData;
let slcChoices, divOutput;
let divJson;

window.addEventListener('load', initialize);

async function initialize() {
    
    // string uit data.js file omzetten naar js object om hier te gebruiken 
    // (backup manier van JSON data opvragen):
        // musicData = JSON.parse(data);
    
    // de officiele manier hier is online bron ophalen dmv een fetch:
    // manier 1:
        // fetch("http://127.0.0.1:5500/data/data.json")
        // .then(response => response.json())
        // .then(data => 
        //     {
        //         musicData = data
        //         console.log(musicData);
        //     });
    // manier 2:
        const response = await fetch("http://127.0.0.1:5500/data/data.json");
        musicData = await response.json();
        console.log(musicData);
// 1
slcChoices = document.getElementById("choices");
// 2
slcChoices.addEventListener("change", showDataSelection);
// 4
divOutput = document.getElementById("output");

// 1
fillChoices();
// geef meteen geselecteerde data vanaf het begin mee
showDataSelection();
}

// 1
function fillChoices() {
    // voor elke key (loudspeakers (0), amplifiers(1)) in musicData
    for (const key in musicData) {
        // op de huidige positie (0 of 1) een nieuwe optie maken met de key als
        // weer te geven tekst (1ste key) en als value (2de key)
        slcChoices[slcChoices.length] = new Option(key, key);
    }
}

// 2
function showDataSelection() {
    resetOutput();
    // var = wat er bij het maken van de opties ingevuld is als value (2de key)
    // dus oftewel loudspeakers oftewel amplifiers - als stringwaarde
    const currentSelection = slcChoices[slcChoices.selectedIndex].value;

    // 3
    // als wat is meegegeven een array is
    if (Array.isArray(musicData[currentSelection])) {
        // 4
        // als huidige selectie -
        switch (currentSelection) {
            // loudspeakers is:
            case "loudspeakers":
                // geef dan huidige luidspreker mee
                displayLoudSpeakers(musicData[currentSelection]);
                break;
            // amplefiers is:
            case "amplifiers":
                // geef dan huidige luidspreker mee
                displayAmplifiers(musicData[currentSelection]);
                break;
            default:
                alert("Oops something went wrong!");
        }
    }
}

// 4
function displayLoudSpeakers(array) {
    // voor elke loudspeaker, loudspeaker tonen in een p-tag
    array.forEach(loudspeaker => {
        // info in var steken
        const loudspeakerInfo = `${loudspeaker.brand.toUpperCase()} | ${loudspeaker.model} (${loudspeaker.connectivity}), ${loudspeaker.powerOutput}`;
        // doorsturen naar paragraph
        const loudSpeakerParagraph = getParagraph(loudspeakerInfo);
        // en in div weergeven
        divOutput.appendChild(loudSpeakerParagraph);
    })

}

// 4
function displayAmplifiers(array) {
    array.forEach(amplifier => {
        // info in var steken
        const amplifierInfo = `${amplifier.brand.toUpperCase()} | ${amplifier.model} (${amplifier.inputs}), ${amplifier.powerOutput}`;
        // doorsturen naar paragraph
        const amplifierParagraph = getParagraph(amplifierInfo);
        // en in div weergeven
        divOutput.appendChild(amplifierParagraph);
    })
}

// 4
function getParagraph(text) {
    // maak p-tag
    const paragraph = document.createElement("p");
    // paragraaf textcontent instellen op paragraph
    paragraph.textContent = text;
    // weergeven
    return paragraph;
}

function resetOutput() {
    divOutput.innerHTML = "";
}