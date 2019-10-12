// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    //fake data
    name: "yoda",
    phone: "32742523",
    email: "whatever@gmail.com",
    ID: "12345"
  }
];

var waitingList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// Displays all tables
//API Table link
app.get("/api/tablelink", function (req, res) {
  return res.json(reservations);
});

//API Wait List 
app.get("/api/waitlist", function (req, res) {
  return res.json(waitingList);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


// Create New Characters - takes in JSON input
app.post("/api/tablelink", function (req, res) {
  var newReservations = req.body;  
  if (reservations.length < 5) {
    console.log(newReservations);

    reservations.push(newReservations);

    res.json(newReservations);
  } else {
    waitingList.push(newReservations);
  }
});

// app.post("/api/clear", function (req, res) {
//   reservation = [];
//   waitingList = [];
// })

/**
// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});
**/

