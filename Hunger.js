
class Hunger {
    
    constructor() {
        this.hungerAmount = 300;
        this.timeUntilDepletion = 10000;
        
    }
    memory() {
        this.hungerAmount = parseInt(window.localStorage.getItem('storedHunger'));
    if(isNaN( this.hungerAmount)) {
        this.hungerAmount = 0;
    }

    }
    show() {
        
        image(appleImg,40,888,44,50);
        
        noStroke();
        rect(100,900,this.hungerAmount,30);
        noFill();
        stroke(0);
        strokeWeight(5);
        rect(100,900,300,30);
        strokeWeight(1);
        textSize(30)
        fill(0);
        text(this.hungerAmount+"/300",190, 926)
        if(this.hungerAmount<=0) {
            text("You Died",450,860);
            this.hungerAmount=0;  
        }
        
    }

    depletion(milliseconds) {
        
        if(int(milliseconds) >= this.timeUntilDepletion) {
            this.hungerAmount-=3;
            this.timeUntilDepletion+=10000;

        }
        
        if(this.hungerAmount>300) {
            this.hungerAmount = 300;
        }
    }

}