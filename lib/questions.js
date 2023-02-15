const fs = require("fs");
const inquirer = require("inquirer");
const shape = require('./lib/shapes');

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

  //function to write to new SVG file
  const shape = new shape(response.text, response.textColor, response.shapeColor);
  .then((response) => {
    //console.log(response);
    //fs.writeFileSync(
    //"logo.svg",
    //`${response.text}\n ${response.textColor}\n ${response.shape}\n ${response.shapeColor}`
    //(err) => (err ? console.error(err) : "success!")
    // );
    if (response.shape === 'triangle') {
      const triangle = new triangle(response.text, response.textColor, response.shapeColor);
      fs.writeFile(`example/logo.svg`, triangle.render(), (err) =>
          err ? console.log(err) : console.log('Generated logo.svg')
      );
  } else if (response.shape === 'square') {
      const square = new square(response.text, response.textColor, response.shapeColor);
      fs.writeFile(`example/logo.svg`, square.render(), (err) =>
          err ? console.log(err) : console.log('Generated logo.svg')
      );
  } else if (response.shape === 'circle') {
      const circle = new circle(response.text, response.textColor, response.shapeColor);
      fs.writeFile(`example/logo.svg`, circle.render(), (err) =>
          err ? console.log(err) : console.log('Generated logo.svg')
      );
  };
    console.log("Generated logo.svg");
  })
  .catch((error) => console.log("error", error));
