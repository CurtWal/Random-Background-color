'use strict'
console.log('working');

//grab generate id from html doc
const generate = document.getElementById("generate");

//grab class id from html doc
const color = document.querySelector(".color");

// make a event for the button to generate a random background color
generate.addEventListener("click",function(){
    //make a whole random number for x y and z
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    //store x y z into one variable
    let bgColor = "rgb(" + a + "," + b + "," + c + ")";

    console.log(bgColor);

//make the backgroud color = what ever the rgb numbers of bgColor
    document.body.style.background = bgColor

    //write the color numbers on html doc for the user to see
    color.textContent = [bgColor];
})
