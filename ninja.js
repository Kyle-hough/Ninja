class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.health);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    } 
    drinkSake() {
        this.health += 10;
    }
        
}
    const ninja1 = new Ninja("Hyabusa", 5);
    ninja1.sayName();
    ninja1.showStats();
    console.log("-------------------------------------------------------------------");
    ninja1.drinkSake();
    ninja1.showStats();