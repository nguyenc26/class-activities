// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


var inquirer = require("inquirer");

inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your name?",
            name: "Username"
        },
        {
            type: "password",
            message: "Enter a password",
            name: "password"
        },
        {
            type: "list",
            message: "What color do you like?",
            choices: ["Red", "Blue", "Green"],
            name: "colors"
        },
        {
            type: "confrim",
            message: "Do you want drugs?",
            name: "drugs"
        }
    ])
    .then(answers => {
        console.log(JSON.stringify(answers, null, ' '))
    });