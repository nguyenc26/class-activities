var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ExtraTwinkies726!",
    database: "quiz_db"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected", con.threadId);

    afterConnection();

}); 

function afterConnection () {
    con.query("SELECT * FROM quiz_db", function(err,res){
        if (err) throw "shieetttttttttt"

        console.log(res);
    });
    killConnection();
};

function killConnection() {
    console.log("Connection over");
    con.end();
};