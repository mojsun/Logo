/*// Constructor Arithmetic is imported.
const Arithmetic = require("../arithmetic.js");

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("Triangle", () => {
    it("should generate a svg file of a triangle with specifications matching user input", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});*/

const { circle, triangle, square } = require("../lib1/shapes1");

const shapeColor = "green";
const textColor = "white";
const characters = "Svg";
const correctSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`;

describe("circle", () => {
  it("should generate a svg file of a circle with specifications matching user input", () => {
    const correctCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        //     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`;

    const makeCircle = () =>
      new circle(shapeColor, textColor, characters).render();

    expect(makeCircle()).toEqual(correctCircle);
  });
});

describe("triangle", () => {
  it("should generate a svg file of a triangle with specifications matching user input", () => {
    const correctTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>`;

    const makeTriangle = () =>
      new triangle(shapeColor, textColor, characters).render();

    expect(makeTriangle()).toEqual(correctTriangle);
  });
});

describe("square", () => {
  it("should generate a svg file of a square with specifications matching user input", () => {
    const makeSquare = () =>
      new square(shapeColor, textColor, characters).render();

    expect(makeSquare()).toEqual(correctSquare);
  });
});
