var http = require ("http");

//PORT is a constant 
var PORT = 7000;
var PORT2 = 7500;

function handleRequest7k (request, response) {
    response.end("It works!! Path Hit: " + request.url + "\nBe nice");
}

function handleRequest75k (request, response) {
    response.end("It works!! Path Hit: " + request.url + "\nKeep Dreaming");
}

var server = http.createServer(handleRequest7k);
var server2 = http.createServer(handleRequest75k);


server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
});

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2)
});
