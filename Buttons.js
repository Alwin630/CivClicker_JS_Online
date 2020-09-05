let resetButton;

let meatButton;
let meatAmount;

let stoneButton;
let stoneAmount;

let stickAmount;
let stickButton;
function createStickButton() {


    stickAmount = parseInt(window.localStorage.getItem('amountOfSticks'));
    if(isNaN(stickAmount)) {
        stickAmount = 0;
    }
    


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
    if(isNaN(stoneAmount)) {
        stoneAmount = 0;
    }
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

function createMeatButton() {
    meatAmount = parseInt(window.localStorage.getItem('amountOfMeat'));
    if(isNaN(stoneAmount)) {
        meatAmount = 0;
    }
    meatButton = createButton('this should be an animal');
    meatButton.position(150,250);
    meatButton.size(70,70);
    meatButton.mousePressed(meatButtonLogic);
}

function meatButtonLogic() {
    meatAmount+=1;
}

function drawMeat() {
    fill(128, 128, 128);
    textSize(32);
    text("Meat " + meatAmount, 450, 250);
}

function reset() {
    resetButton = createButton('Restart');
    resetButton.position(450,height-50);
    resetButton.size(150,50);
    resetButton.mousePressed(resetLogic);
}

function resetLogic() {
    stoneAmount = 0;
    stickAmount = 0;
}