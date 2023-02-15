/*const fs = require("fs");
const inquirer = require("inquirer");
const Shape = require(`./shape`);
const { Triangle, Square, circle } = require("./shapes");

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
      name: "color",
    },
  ])
  //function to write to new svg file

  .then((response) => {
    const shape = new Shape(
      response.text,
      response.textColor,
      response.shapeColor
    );
    if (response.shape === "triangle") {
      const triangle = new Triangle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`example/logo.svg`, triangle.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    } else if (response.shape === "square") {
      const square = new Square(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`example/logo.svg`, square.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    } else if (response.shape === "circle") {
      const circle = new circle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`example/logo.svg`, circle.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    }
  })
  .catch((error) => console.log("error", error));*/
// main.js
const fs = require("fs");
const inquirer = require("inquirer");
const Shape = require(`./shape`);
const { Triangle, Square, Circle } = require("./shapes");

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
      name: "color",
    },
  ])
  //function to write to new svg file

  .then((response) => {
    const shape = new Shape(
      response.text,
      response.textColor,
      response.shapeColor
    );

    if (response.shape === "triangle") {
      const triangle = new Triangle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`logo.svg`, triangle.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    } else if (response.shape === "square") {
      const square = new Square(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`logo.svg`, square.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    } else if (response.shape === "circle") {
      const circle = new Circle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      fs.writeFile(`logo.svg`, circle.render(), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
      );
    }
  })
  .catch((error) => console.log("error", error));
