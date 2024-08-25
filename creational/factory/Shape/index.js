// Usage

const ShapeFactory = require("./ShapeFactory");

const factory = new ShapeFactory();
const circle = factory.createShape("circle");
const square = factory.createShape("square");
const triangle = factory.createShape("triangle");

console.log(circle.draw()); // Output: "Drawing a Circle"
console.log(square.draw()); // Output: "Drawing a Square"
console.log(triangle.draw()); // Output: "Drawing a Triangle"
