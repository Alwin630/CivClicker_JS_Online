//Incomplete
class upgradeButtons {

    constructor(x,y) {
        this.pos = createVector(x,y);
    }

    show() {
        rect(this.pos.x,this.pos.y,50,50)
        
        
    }

    logic(f,mx,my) {
        if(mouseIsPressed && mx>= this.pos.x && my >= this.pos.y && my <= this.pos.y+50) {
            hunger.hungerAmount+=f;
        }
        
    }
}







