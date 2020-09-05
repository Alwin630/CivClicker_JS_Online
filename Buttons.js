
let stickAmount=0;
let stickButton;
function createStickButton() {

    fill(255);
    stickButton = createButton('this button should be a tree');
    stickButton.position(50,50);
    stickButton.size(70,70);
    stickButton.mousePressed(stickButtonLogic);
}

// Increase the number of sticks
function stickButtonLogic() {
    stickAmount += 1;   
}

// Update the counter text
function drawSticks() {
    
    fill(0);
    textSize(32);
    text(stickAmount,500,50);
    
}