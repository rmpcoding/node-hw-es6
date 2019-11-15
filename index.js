var inquirer = require("inquirer");
var api = require("./api");
var generator = require("./generate-html")
var pdf = require("html-pdf");
var options = {format: "Tabloid"};


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
      choices: ["red", "blue", "green", "pink"]
    },
  ])
  .then(({username, color}) => {
    api.getUser(username).then((data) => {
      // console.log(color, data);
    let html =  generator.generator(generator.colors, color, data)
    pdf.create(html, options).toFile("./gitprofile.pdf", (error, response) => {
      if (error) {
        console.log(error);
        return error
      } else {
        console.log(response);
        return response;
      }
    })

    })
  });


