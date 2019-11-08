var inquirer = require("inquirer");
var api = require("./api");
var generator = require("./generate-html")
var fs = require("fs");
var pdf = require("html-pdf");
var html = fs.generator("./test/gitpdf.html", "utf8")
var options = {format: "Letter"};

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
  .then(function({username, color}) {
    // console.log(color);
    api.getUser(username).then(function(data){
console.log(color)
generator(color,data)
    })
    .then((html, options) => {
      pdf.create(html).toFile("./gitprofile.pdf", (error, response) => {
        if (errror) {
          return console.log(error);
        } else {
          console.log(response);
        }
      })
    });
  // return back to this once we get the git stars
  // .then((response) => {
  //   console.log(response);
  // })
  });




  // Will I need to add module.export variables to dependencies in JSON object?