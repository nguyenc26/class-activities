var fs = require("fs");

var action = process.argv[2];
var amount = parseFloat(process.argv[3]);


if (action === "total") {

    fs.readFile('bank.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    
        var dataArr = data.split(",");
        var total = 0;
        for (var i = 0; i < dataArr.length; i++) {
            total += parseFloat(dataArr[i]);
        } 
        console.log("You have a total of " + total.toFixed(2));  
    });
} else if (action === "deposit") {
    fs.appendFile('bank.txt', ", ")
} else if (action === "withdraw") {

}