"use strict"


window.addEventListener('load', initialize);

let body;

const loudspeakers = [
    { brand: "Bose", model: "SoundLink Mini II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "10 W", connectivity: "Bluetooth" },
    { brand: "JBL", model: "Flip 5", frequencyResponse: "70 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" },
    { brand: "Sonos", model: "One", frequencyResponse: "60 Hz - 20 kHz", powerOutput: "6 W", connectivity: "Wi-Fi, Bluetooth" },
    { brand: "Beats", model: "Pill+", frequencyResponse: "40 Hz - 20 kHz", powerOutput: "12 W", connectivity: "Bluetooth" },
    { brand: "Marshall", model: "Stockwell II", frequencyResponse: "50 Hz - 20 kHz", powerOutput: "20 W", connectivity: "Bluetooth, NFC" }
];
  

function initialize() {
    body = document.querySelector("body");
    // 1
    const btnShowData = document.getElementById("btnShowDataArray");
    // 2
    btnShowData.addEventListener("click",showDataArray);
}

// 3
function showDataArray(){
    removeLastSpeaker(); // Marshall Stockwell II wordt verwijderd
    addSpeaker();
    showBrands();
    showBluetoothOnlyModels();
}

// 4
function showBrands(){
    const header = document.createElement("h2");
    header.textContent = "Brands";
    body.appendChild(header);

    loudspeakers.forEach(loudspeaker => {
        const paragraph = document.createElement("p");
        paragraph.textContent = loudspeaker.brand;
        body.appendChild(paragraph);
    });
}

// 5
function showBluetoothOnlyModels(){
    const header = document.createElement("h2");
    header.textContent = "Bluetooth Only";
    body.appendChild(header);
    
    const filtered = loudspeakers.filter(loudspeaker => loudspeaker.connectivity === "Bluetooth");
    filtered.forEach(loudspeaker => {
        const paragraph = document.createElement("p");
        paragraph.textContent = loudspeaker.model + " = " + loudspeaker.connectivity;
        body.appendChild(paragraph);
    });
}

// 6
function addSpeaker(){
    const newSpeaker = {
        brand: "Howest Music",
        model: "Programming",
        frequencyResponse: "50 Hz - 20 kHz",
        powerOutput: "20 W",
        connectivity: "NFC"
    };
    loudspeakers.push(newSpeaker);
}

// 7
function removeLastSpeaker(){
    loudspeakers.pop();
}
