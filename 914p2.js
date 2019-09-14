var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "'s offense has been boosted by 1!\n----------");
        } else {
            this.defense++;
            console.log(this.name + "'s defense has been boosted by 1!\n----------");
        }
    };

    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has decreased by 1!\n----------");
        } else {
            this.defense--;
            console.log(this.name + "'s defense has decreased by 1!\n----------");
        }
    }
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n---------------");
    }
};

var starters = [];
var subs = [];
var team = [];

var playerChar = function () {
    if (starters.length + subs.length < 3) {
        console.log("\nNew Player");

        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your position?"
            }, {
                type: "list",
                message: "What is your offense stat?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                name: "offense",
                //if you want enter a number do this 
                //validate 
            }, {
                type: "list",
                message: "what is your defense stat?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                name: "defense"
            }
        ]).then(function (answers) {
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            if (starters.length < 2) {
                starters.push(newPlayer);
                team.push(newPlayer);
                console.log(newPlayer.name + " has been added to the starters")
            } else {
                subs.push(newPlayer);
                team.push(newPlayer);
                console.log(newPlayer.name + " has been added to the subs")
            }
            playerChar();
        });
    } else {
        for (var i = 0; i < team.length; i++) {
            team[i].printStats();
        }
    }
};

playerChar();

count = 0;
teamscore = 0;
var playGame = function () {
    if (count < 5) {
        var num1 = Math.floor((Math.random() * 20) + 1);
        var num2 = Math.floor((Math.random() * 20) + 1);
        var offenseSum = starters[1].offense + starters[2].offense;
        var defenseSum = starters[1].defense + starters[2].defense;


        if (num1 < offenseSum) {
            teamscore++;
        }
        if (num2 > defenseSum) {
            teamscore--;
        }
    }
};

playGame();