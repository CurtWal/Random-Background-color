'use strict'
console.log('working');


const generate = document.getElementById("generate");


const color = document.querySelector(".color");

generate.addEventListener("click",function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    console.log(bgColor);

    document.body.style.background = bgColor
    color.textContent = [bgColor];
})
