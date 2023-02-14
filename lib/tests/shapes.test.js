// Constructor Arithmetic is imported.
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
});
