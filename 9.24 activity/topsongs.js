var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ExtraTwinkies726!",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    startquery();
});

function startquery() {
    inquirer.prompt([{
        type: 'list',
        name: 'filter',
        message: 'What kind of search would you like to do?',
        choices: ['By Artist', 'By Song Count', 'By Year Range', 'By Song Name']
    }]).then(function (input) {
        switch (input) {
            case 'By Artist':
                getArtist();
                break;
            case 'By Song Count':
                getSongCount();
                break;
            case 'By Year Range':
                getYearRange();
                break;
            case 'By Song Name':
                getSongName();
                break;
        };
    });
};

function getArtist () {
    inquirer.prompt ([{
        type: 'input',
        name: 'artist',
        message: 'Enter the artist name'
    }])
}
