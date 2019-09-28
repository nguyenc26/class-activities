var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Sever is listening on PORT: " + PORT);
});

function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
        case "/food.html":

        case "/frameworks.html":
            
        case "/movies.html":
        
        break;


        default:
            path = "/index.html"

    }
    fs.readFile(__dirname + path, function (err, data) {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);

    });


}