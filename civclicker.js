// Website: https://alwin630.github.io/CivClicker_JS_Online/
"use strict";
let hunger;
let steakImg;
let twigImg;
function preload() {
steakImg = loadImage('assets/Steak4.png')
twigImg = loadImage('assets/twig.png')

}


function setup() {
    
    createCanvas(1280, 960);
    
    noStroke();
    
    createStickButton();
    createStoneButton();
    createMeatButton();
    restartButton();

    hunger = new Hunger();
}


function draw() {

    background(185);
    
    fill(102, 51, 0);
    rect(495,534,10,50)
    fill(0, 153, 51);
    ellipse(500,500,80,80);
    drawSticks();
    drawStone();
    drawMeat();

    hunger.show();
    hunger.depletion(millis());
}

// Store number of sticks in browser
let data = {
    storeData: function() {
        window.localStorage.setItem('amountOfSticks', stickAmount);
        window.localStorage.setItem('amountOfStone', stoneAmount);
        window.localStorage.setItem('amountOfMeat', meatAmount);
    }
}

window.onbeforeunload = function() { data.storeData(); };