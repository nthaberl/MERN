class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack (target) {
        target.res -= this.power;
        console.log(`${target.name} takes ${this.power} damage! Their resilience is now at ${target.res}`);
    }
}

class Effect extends Card {
    constructor (name, cost, text, magnitude){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
    }


    powerplay(target){
        target.power += this.magnitude;
        console.log(`${target.name} power: ${target.power}`);
    }

    resplay(target){
        target.res += this.magnitude;
        console.log(`${target.name} resilience : ${target.res}`);
    }
}

const RedBeltNinja = new Unit ("Red Belt Ninja", 3, 3, 4);

const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 3);
HardAlgorithm.resplay(RedBeltNinja);

const BlackBeltNinja = new Unit ("Black Belt Ninja", 4, 5, 4);

const Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", -2);
Rejection.resplay(RedBeltNinja);

const PP = new Effect("Pair Programming", 3, "increase target's power by 2", 2);
PP.powerplay(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);