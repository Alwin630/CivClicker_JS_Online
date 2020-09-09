
class Hunger {
    
    constructor() {
        this.hungerAmount = 100;
        this.timeUntilDepletion = 10000;
    }
    
    show() {
        //will replace "Hunger: " with food image
        text("Hunger: "+this.hungerAmount+"/100",50, 920)
        if(this.hungerAmount<=0) {
            text("You Died",450,860);
        }
    }

    depletion(milliseconds) {
        
        if(int(milliseconds) >= this.timeUntilDepletion) {
            this.hungerAmount-=1;
            this.timeUntilDepletion+=10000;

        }
        
    }

}