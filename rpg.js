function Character(created, name, profession, gender, age, strength, HP) {
    this.created = created;
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    this.IsAlive = function IsAlive(HP) {
        if (this.HP > 0) {
            console.log("Is Alive")
        } else {
            console.log("Is dead")
        }
    }
    this.print = function () {
        if (this.created === true) {
            console.log(this.name);
            console.log(this.profession);
            console.log(this.gender);
            console.log(this.age);
            console.log(this.strength);
            console.log(this.HP);
        }
    }
};

var guy = new Character(true, "DouggieFresh", "Baker", "Male", 23, 20, 100);
var girl = new Character(false, "Yogurl", "Barista", "Female", 48, 90, 100);

guy.print();
girl.created = true;
girl.print();
guy.IsAlive();
girl.IsAlive();
