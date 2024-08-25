class Circle {
    draw() {
        return "Drawing a Circle";
    }
}

class Square {
    draw() {
        return "Drawing a Square";
    }
}

class Triangle {
    draw() {
        return "Drawing a Triangle";
    }
}

class ShapeFactory {
    createShape(shapeType) {
        if (shapeType === "circle") {
            return new Circle();
        } else if (shapeType === "square") {
            return new Square();
        } else if (shapeType === "triangle") {
            return new Triangle();
        } else {
            throw new Error("Unknown shape type");
        }
    }
}

module.exports = ShapeFactory;
