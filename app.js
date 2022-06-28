'use strict'
console.log('working');

//grab generate id from html doc
const generate = document.getElementById("generate");

//grab class id from html doc
const color = document.querySelector(".color");

// make a event for the button to generate a random background color
generate.addEventListener("click",function(){
    //make a whole random number for x y and z
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    //store x y z into one variable
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    console.log(bgColor);

//make the backgroud color = what ever the rgb numbers of bgColor
    document.body.style.background = bgColor

    //write the color numbers on html doc for the user to see
    color.textContent = [bgColor];
})
