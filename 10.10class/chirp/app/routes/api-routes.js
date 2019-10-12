// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/api/all", function (req, res){
  var dbQuery = "SELECT * FROM chirps"
  connection.query(dbQuery, function (err,data) {
    if(err) {
      return res.status(500).end();
    }
    res.json(data);
  })
})

  // Add a chirp
app.post("/api/new", function (req, res) {
  console.log("Chirp Data: ");
  console.log(req.body);

  var dbQuery = "INSERT INTO chirps (author, chirp, createDate) VALUES (?,?,?)";

  connection.query(dbQuery, [req.body.author, req.body.chirp, req.body.createDate], function (err, data){
    if (err) throw err;
    console.log("Chirp Added: ");
    res.end();
  })
})

};
