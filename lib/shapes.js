class shapes {
  constructor(text, textColor, shapeColor) {
    this.t = text;
    this.tc = textColor;
    this.sh = shapeColor;
  }
  render() {
    return this.svg;
  }
}
class triangle {
  constructor(text, textColor, shapeColor) {
    shapes.call(this, text, textColor, shapeColor);
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
  }
}
class circle {
  constructor(text, textColor, shapeColor) {
    shapes.call(this, text, textColor, shapeColor);
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        //     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
  }
}
class square {
  constructor(text, textColor, shapeColor) {
    shapes.call(this, text, textColor, shapeColor);
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        </svg>`;
  }
}

module.exports = { circle, triangle, square, shapeFactory };
