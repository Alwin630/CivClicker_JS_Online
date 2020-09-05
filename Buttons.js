
let stoneButton;
let stoneAmount=0;
let stickAmount=0;
let stickButton;
function createStickButton() {


    stickAmount = parseInt(window.localStorage.getItem('amountOfSticks'));

    


    fill(255);
    stickButton = createButton('this button should be a tree');
    stickButton.position(150,50);
    stickButton.size(70,70);
    stickButton.mousePressed(stickButtonLogic);
}

// Increase the number of sticks
function stickButtonLogic() {
    stickAmount+=1;   
}

// Update the counter text
function drawSticks() {
    
    fill(77, 38, 0);
    textSize(32);
    text("sticks " + stickAmount, 450, 50);
}

function createStoneButton() {
    stoneAmount = parseInt(window.localStorage.getItem('amountOfStone'));
    stoneButton = createButton('this button should be stone');
    stoneButton.position(150,150);
    stoneButton.size(70,70);
    stoneButton.mousePressed(stoneButtonLogic);
}

function stoneButtonLogic() {
    stoneAmount+=1;
}

function drawStone() {
    fill(128, 128, 128);
    textSize(32);
    text("stone " + stoneAmount, 450, 150);
}