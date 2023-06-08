"use strict";

//declare global vars here
let divStart

//wait for document load
window.addEventListener('load',initialize);

function initialize() {
    divStart = document.querySelector("#start");
    const divEnd = document.querySelector("#end");

    divStart.addEventListener("dblclick",changeContentStart);
    divEnd.addEventListener("mousemove",hideDivStart);

}

function changeContentStart(){
    divStart.textContent = "Tekstinhoud werd aangepast";
}

function hideDivStart(){
    divStart.className = "hidden";
    divStart.removeEventListener("dblclick",changeContentStart);
}
