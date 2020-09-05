// Website: https://alwin630.github.io/CivClicker_JS_Online/
"use strict";
function setup() {
    
    createCanvas(1280, 960);
    noStroke();
    
    createStickButton();
}


function draw() {

    background(185);
    fill(102, 51, 0);
    rect(495,534,10,50)
    fill(0, 153, 51);
    ellipse(500,500,80,80);
    drawSticks();
}