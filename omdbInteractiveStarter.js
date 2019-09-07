// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
 var axios = require("axios");

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------


// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...

//var nodeArgs = process.argv;


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];

// for (var i = 2; i , nodeArgs.length; i++) {
//     movieName = movieName + "+" + 
// }
// // ...


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...

axios.get(queryUrl).then(
    function(response) {
        console.log( "The movie's Release Year is: " + response.data.Year);
    })
    .catch(function(error) {
        if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config); 
    })

// If the request with axios is successful
// ...

// Then log the Release Year for the movie
// ...
