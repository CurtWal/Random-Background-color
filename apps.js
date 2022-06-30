'use strict'
console.log('working');

// making an array with color names
const bgColors = ["Mediumvioletred","Mediumaquamarine","Mediumorchid","Mistyrose","Midnightblue","Fuchsia","HotPink","Pink","Lime","BlueViolet","Teal","Brown","Aquamarine","Lightblue", "Blue", "Orange", "Yellow", "Purple", "Grey", "Lightblue", "Green", "Yellowgreen","Pink","Red", "Lawngreen","Lightcoral"];

// grabbing the .color id from the html doc
const color = document.querySelector(".color");

// grabbing the generate id from the html doc
const generate = document.getElementById("generate");


// make a function that randomize the colors
function getRandomBgColor(){

    // randomizes the colors
 return Math.floor(Math.random() * bgColors.length);

}

// make the button click and change background color
generate.addEventListener("click",function(){
    
    // let a name equal the function above so onclick it calls it
    let randomBgColor = getRandomBgColor();
    console.log(randomBgColor);
    

//make the backgroud color = what ever the rgb numbers of bgColors
    document.body.style.background = bgColors[randomBgColor]

    //write the color on html doc for the user to see
    color.textContent = bgColors[randomBgColor];
})