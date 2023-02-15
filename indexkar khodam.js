/*const fs = require("fs");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "enter a text up to three characters",
      name: "text",
    },
    {
      type: "input",
      message: "enter a text color",
      name: "textColor",
    },
    {
      type: "list",
      message: "choose one of the shapes below",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "enter a color for shape",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFileSync(
      "logo.svg",
      `${response.text}\n ${response.textColor}\n ${response.shape}\n ${response.shapeColor}`
      //(err) => (err ? console.error(err) : "success!")
    );
    console.log("Generated logo.svg");
  })
  .catch((error) => console.log("error", error));*/
