// Website: https://alwin630.github.io/CivClicker_JS_Online/
"use strict";
let hunger;
let steakImg;
let twigImg;
let campfireImg;
let appleImg;

function preload() {
steakImg = loadImage('assets/Steak4.png')
twigImg = loadImage('assets/twig.png')
campfireImg = loadImage('assets/campfire.png');
appleImg = loadImage('assets/Apple.png');
}


function setup() {
    
    createCanvas(1280, 960);
    
    noStroke();
    
    createStickButton();
    createStoneButton();
    createMeatButton();
    restartButton();

    hunger = new Hunger();
    hunger.memory();
}


function draw() {

    background(185);
    
    // fill(102, 51, 0);
    // rect(495,534,10,50)
    // fill(0, 153, 51);
    // ellipse(500,500,80,80);
    drawSticks();
    drawStone();
    drawMeat();
    death();
    image(campfireImg, 750,100, 173, 114);
    hunger.show();
    hunger.depletion(millis());

}

function death() {
    if(hunger.hungerAmount<=0) {
        stoneAmount = 0;
        stickAmount = 0;
        meatAmount = 0;
    }
}

// Store number of sticks in browser
let data = {
    storeData: function() {
        window.localStorage.setItem('amountOfSticks', stickAmount);
        window.localStorage.setItem('amountOfStone', stoneAmount);
        window.localStorage.setItem('amountOfMeat', meatAmount);
        window.localStorage.setItem('storedHunger', hunger.hungerAmount);
    }
}

window.onbeforeunload = function() { data.storeData(); };