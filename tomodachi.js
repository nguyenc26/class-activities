function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else if (this.hungry === false) {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function() { 
        if (this.sleepy === true) {
            console.log ("Zzzzzzzzzzzzzz");
            this.sleepy = false; 
            this.bored = true;
            this.increaseAge();
        } else if (this.sleepy === false) {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else if (this.bored === false) {
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function() {
        this.age += 1; 
        console.log("Happy Birthday to me! I am " + this.age + " old!")
    };
}; 

var dog = new DigitalPal (); 

dog.play();
dog.feed();
dog.sleep();

var Outside = false; 

dog.bark() = function () {
    console.log("Woof! Woof!");
};
buddy.goOutside() = function () {
    if (this.Outside === false) {
        console.log
    }
}

