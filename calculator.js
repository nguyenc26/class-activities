var operation = process.argv[2];
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);


if (operation === "add") {
    console.log(a + b);
} else if (operation === "subtract") {
    console.log(a - b);
} else if (operation === "multiply") {
    console.log(a * b);
} else if (operation === "divide") {
    if (b === 0) {
        console.log("You can't divide by 0")
    } else {
        console.log(a / b);
    }
} else if (operation === "exp") {
    console.log(Math.pow(a, b));
} else {
    console.log("Invalid operator.")
}


// or you can do it with the 

// var outputNum; 

// if same as above 
//     outputNum = same as above 

//==================Exports for other files=============
// module.export {
// key:value pairs 
// essentials: essentials 
// Name: something that exisits above 
// }

//====================Imports/ grabs the files that you exported===
//var name = require(relative path of whatever)