// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
  apiKey: "AIzaSyBzIDn_Hbn9NdSZRgzQ1aSnCf8sKy0G7is",
  authDomain: "someprojectidk1.firebaseapp.com",
  databaseURL: "https://someprojectidk1.firebaseio.com",
  projectId: "someprojectidk1",
  storageBucket: "",
  messagingSenderId: "926431109049",
  appId: "1:926431109049:web:626f5794f85c19eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Assign the reference to the database to a variable named 'database'
// var database = ...

var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...

    highPrice = $("#bidder-price").val().trim();
    highBidder = $("#bidder-name").val().trim();

    database.ref().set({
      initialBid: highPrice,
      initialBidder: highBidder
    });

    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text(snapshot.val().highPrice);

    // Print the data to the console.
    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text(snapshot.val().highPrice);


    // Print the data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
