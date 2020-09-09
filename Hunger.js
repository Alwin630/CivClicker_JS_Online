
class Hunger {
    
    constructor() {
        this.hungerAmount = 100;
        this.timeUntilDepletion = 10000;
    }
    
    show() {
        //will replace "Hunger: " with food image
        image(appleImg,100,882,44,50)
        text(this.hungerAmount+"/100",150, 920)
        if(this.hungerAmount<=0) {
            text("You Died",450,860);
            this.hungerAmount=0;
        }
    }

    depletion(milliseconds) {
        
        if(int(milliseconds) >= this.timeUntilDepletion) {
            this.hungerAmount-=1;
            this.timeUntilDepletion+=10000;

        }
        
    }

}