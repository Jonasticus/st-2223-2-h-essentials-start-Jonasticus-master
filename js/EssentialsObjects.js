"use strict"

window.addEventListener('load',initialize);

let body;

const loudspeaker = {
    brand: "Bose",
    model: "SoundLink Mini II",
    frequencyResponse: "50 Hz - 20 kHz",
    powerOutput: "10 W",
    connectivity: "Bluetooth"
  };


  function initialize(){
    body = document.querySelector("body");
    // 1
    const btnShowData = document.getElementById("btnShowDataObject");
    // 2
    btnShowData.addEventListener("click", showData);
  }

// 2
  function showData(){
    const paragraph = document.createElement("p");
    let textToDisplay = "";

    // 3
    const model = loudspeaker["model"];
    // 4
    const brand = loudspeaker.brand;

    textToDisplay = `${model}, ${brand}`;

    paragraph.textContent = textToDisplay;
    body.appendChild(paragraph);
    showKeys();
  }

//   5
  function showKeys(){
    for (const key in loudspeaker){
        // textContent ook mogelijk ipv innerHTML
        body.innerHTML += `<p>${key}: ${loudspeaker[key]}</p>`;

    }
  }