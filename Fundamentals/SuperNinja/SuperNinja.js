class Ninja {
    constructor (name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Haaaayah my name is ${this.name}`);
    }

    showStats(){
        console.log(`Current stats --- Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }
}


//From practice assignment
// const ninja1 = new Ninja("Hyabusa", 10);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja {
    constructor (name){
        super(name, 200, 10, 10)
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log(`What one programmer can do one in month, two programmers can do in two months.`);
        //testing to see if wisdom stat was applied to sensei class
        // this.wisdom +=10;
        // console.log(`${this.wisdom}`);
    }

    showStats(){
        const stats = super.showStats();
        // console.log(stats);
    }

    
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"