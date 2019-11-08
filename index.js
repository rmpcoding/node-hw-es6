var inquirer = require("inquirer");
var api = require("./api");
var generator = require("./generate-html")

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "yellow"]
    },
  ])
  .then(function({username, color}) {
    console.log(color);
    generator(api.getUser(username))
  // return back to this once we get the git stars
  // .then((response) => {
  //   console.log(response);
  // })
  });
