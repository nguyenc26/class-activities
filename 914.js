//throw stops whatever you are doing and does not continue the program where console.error will go through the rest of the STATUS_CODES.


function Programer(name, position, age, faveLanguage) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.faveLanguage = faveLanguage;
}
var hank = new Programer("DUDE DUDE", "coderguy", 45, "JS");
Programer.prototype.print = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nFavorite Language: ");
};
var programer = new Programer(true, "Big BOOTY dude", "Web Developer", 35, "Javascript");

programer.print();
programer.created = true;

