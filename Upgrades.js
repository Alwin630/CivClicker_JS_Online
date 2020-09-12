//Incomplete
class upgradeButtons {

    constructor(x,y) {
        this.upgradeButton;
        this.x = x;
        this.y = y;
    }

    show() {
        this.upgradeButton = createButton('hui');
        this.upgradeButton.position(this.x, this.y);
        this.upgradeButton.size(70,70);
        this.upgradeButton.mousePressed();
        
    }

    logic(f) {
         hunger.hungerAmount+=f;
    }
}





