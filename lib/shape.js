class Shape {
  constructor(text, textColor, shapeColor) {
    this.t = text;
    this.tc = textColor;
    this.sh = shapeColor;
  }
  render() {
    return this.svg;
  }
}

module.exports = Shape;
