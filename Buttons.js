
let stickAmount=0;
let stickButton;
function createStickButton() {
    "use strict";

    //The following doesnt work because the p5 is outdated, im going to code everything and just comment it out. Bugs be darned
    // fill(255);
    // stickButton = createButton('click me');
    // stickButton.positon(0,0);
    // stickButton.size(50,25);
    // stickButton.mousePressed(stickButtonLogic);
}

function stickButtonLogic() {
    //this works, the function just isnt being called
    fill(0);
    textSize(32);
    text(stickAmount,500,50);
    stickAmount+=1;   
}