/*
* File: app.js
* Author: Gillich Norbert
* Copyright: 2024, Gillich Norbert
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/gillichnorbert/terkup
* Licenc: GNU GPL
*/
const sideInput = document.getElementById("side")
const calcButton = document.getElementById("calcButton")
const areaOutput = document.getElementById("area")

calcButton.addEventListener("click",() =>{
    startCalc()
})

    function startCalc() {
        const side = parseFloat(sideInput.value)
        const area = calcArea(side)
        areaOutput.value = area
    }

    function calcArea(side) {
        return (16 * side * side) / (4 * Math.tan(Math.PI / 16))
    }


