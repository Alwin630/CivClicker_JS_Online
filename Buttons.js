let resetButton;

let meatButton;
let meatAmount;
let meatProb;

let stoneButton;
let stoneAmount;

let stickAmount;
let stickButton;

let xPosForNum = 540;

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
    hunger.hungerAmount-=1;   
}

// Update the counter text
function drawSticks() {
    stroke(0);
    strokeWeight(3);
    fill(77, 38, 0);
    textSize(32);
    text(stickAmount, xPosForNum, 50);
    image(twigImg,465,12,60,50);
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
    hunger.hungerAmount-=1;  
    
}

function drawStone() {
    fill(128, 128, 128);
    textSize(32);
    text("stone " + stoneAmount, 450, 150);
}

function createMeatButton() {
    meatAmount = parseInt(window.localStorage.getItem('amountOfMeat'));
    if(isNaN(meatAmount)) {
        meatAmount = 0;
    }
    meatButton = createButton('this should be an animal');
    meatButton.position(150,250);
    meatButton.size(70,70);
    meatButton.mousePressed(meatButtonLogic);
}

function meatButtonLogic() {
    meatProb = int(random(1,3));
    if(meatProb == 1) {
        meatAmount+= 1;
    }
    hunger.hungerAmount-=1;  
}

function drawMeat() {
    fill(160,34,34);
    textSize(32);
    text(meatAmount, xPosForNum, 250);
    image(steakImg,470,215,60,50);
}

function restartButton() {
    resetButton = createButton('Restart');
    resetButton.position(450,height-50);
    resetButton.size(150,50);
    resetButton.mousePressed(resetLogic);
}

function resetLogic() {
    stoneAmount = 0;
    stickAmount = 0;
    meatAmount = 0;
    hunger.hungerAmount=100;
    
}