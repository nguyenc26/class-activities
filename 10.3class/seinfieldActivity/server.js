var express = require("express");
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ExtraTwinkies726!",
    database: "seinfeld"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

app.get("/cast", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY id", function (err, result) {
        if (err) throw err;
        var html = "<h1> Actors Ordered by id </h1>";
        html += "<ul>";
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + "</p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + "</p></li>";
            html += "<p>Attitude: " + result[i].attitude + "</p></li>";
            }
        html += "</ul>";
        res.send(html);
    });
});

app.get("/attitude-chart/:att", function (req, res) {
    connection.query("SELECT * FROM actors WHERE attitude=?", [req.params.att], function (err, result) {
        if (err) throw err;
        var html = "<h1> Actors Ordered by Attitude </h1>";
        html += "<ul>";
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + "</p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + "</p></li>";
            html += "<p>Attitude: " + result[i].attitude + "</p></li>";
            }
        html += "</ul>";
        res.send(html);
    });
});

app.get("/coolness-chart", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function (err, result) {
        if (err) throw err;
        var html = "<h1> Actors Ordered by Coolness Points </h1>";
        html += "<ul>";
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + "</p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + "</p></li>";
            html += "<p>Attitude: " + result[i].attitude + "</p></li>";
            }
        html += "</ul>";
        res.send(html);
    });
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });