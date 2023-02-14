const svgjs = require("svg.js");
const fs = require("fs");

// Prompt the user for text, text color, shape, and shape color
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter up to three characters: ", (text) => {
  readline.question(
    "Enter a color keyword or hexadecimal number for the text color: ",
    (textColor) => {
      readline.question(
        "Choose a shape (circle, triangle, or square): ",
        (shape) => {
          readline.question(
            "Enter a color keyword or hexadecimal number for the shape color: ",
            (shapeColor) => {
              // Create an SVG object with the specified dimensions and style
              const width = 300;
              const height = 200;
              const canvas = svgjs(window.document.createElement("div")).size(
                width,
                height
              );
              const draw = canvas.viewbox(0, 0, width, height);

              // Draw the shape with the specified color
              let shapeElem;
              if (shape === "circle") {
                shapeElem = draw
                  .circle(100)
                  .cx(width / 2)
                  .cy(height / 2)
                  .fill(shapeColor);
              } else if (shape === "triangle") {
                shapeElem = draw
                  .polygon("50,0 100,100 0,100")
                  .move(width / 4, height / 4)
                  .fill(shapeColor);
              } else if (shape === "square") {
                shapeElem = draw
                  .rect(100, 100)
                  .move(width / 4, height / 4)
                  .fill(shapeColor);
              } else {
                console.error("Invalid shape: " + shape);
                process.exit(1);
              }

              // Draw the text with the specified color
              draw
                .text(text)
                .cx(width / 2)
                .cy(height / 2)
                .fill(textColor)
                .font({ size: 60 });

              // Save the SVG object to a file named `logo.svg`
              const svgString = canvas.svg();
              fs.writeFileSync("logo.svg", svgString);

              // Print "Generated logo.svg" in the command line
              console.log("Generated logo.svg");

              // Close the readline interface
              readline.close();
            }
          );
        }
      );
    }
  );
});
