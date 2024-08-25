
# JavaScript Design Patterns

## Overview

This repository contains a collection of commonly used design patterns in JavaScript. Design patterns are reusable solutions to common problems that occur in software design. They provide a structured approach to solving these problems, making code more efficient, scalable, and easier to maintain.

## Table of Contents

- [Introduction](#introduction)
- [Types of Design Patterns](#types-of-design-patterns)
- [Patterns Covered](#patterns-covered)
- [Pattern Details](#pattern-details)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Introduction

JavaScript is a versatile language, widely used for both client-side and server-side development. Understanding and applying design patterns can greatly improve the quality of your code. This repository explores various design patterns in JavaScript, providing examples and explanations for each pattern.

## Types of Design Patterns

1. **Creational Patterns:** Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
2. **Structural Patterns:** Concerned with object composition, ensuring that objects are structured in an efficient and flexible way.
3. **Behavioral Patterns:** Focus on communication between objects, defining how they interact and share responsibilities.

## Patterns Covered

### Creational Patterns:
- Singleton
- Factory
- Prototype
- Builder

### Structural Patterns:
- Module
- Decorator
- Adapter
- Facade

### Behavioral Patterns:
- Observer
- Command
- Strategy
- Chain of Responsibility

Each pattern is explained with code examples and practical use cases.

## Pattern Details

### Creational Patterns

#### 1. Factory Pattern
The Factory Pattern is used to create objects without specifying the exact class of object that will be created. It provides a simple interface for creating objects by allowing subclasses to alter the type of objects that will be created.

**Usage Example:**
```javascript
class Car {
  constructor() {
    this.type = 'Car';
  }
}

class Truck {
  constructor() {
    this.type = 'Truck';
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

const car = VehicleFactory.createVehicle('car');
const truck = VehicleFactory.createVehicle('truck');
console.log(car.type); // Output: Car
console.log(truck.type); // Output: Truck
```

The Factory Pattern is particularly useful when the exact object types are determined at runtime, and you want to avoid the complexities of object creation logic spread across the codebase.

#### 2. Singleton Pattern
The Singleton Pattern restricts the instantiation of a class to a single instance. This is useful when only one instance of the class is needed to coordinate actions across the system.

**Usage Example:**
```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true
```

#### 3. Prototype Pattern
The Prototype Pattern is used to create new objects based on an existing object by cloning it. It is particularly useful when the creation of an object is resource-intensive, and you want to avoid reinitializing objects from scratch.

**Usage Example:**
```javascript
const prototypeCar = {
  wheels: 4,
  drive() {
    console.log('Driving...');
  }
};

const car1 = Object.create(prototypeCar);
car1.drive(); // Output: Driving...
```

### Structural Patterns

#### 1. Module Pattern
The Module Pattern is used to encapsulate private and public variables and methods, providing a clean and organized way to structure your code.

**Usage Example:**
```javascript
const Module = (function () {
  let privateVar = 'I am private';

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod() {
      privateMethod();
    }
  };
})();

Module.publicMethod(); // Output: I am private
```

#### 2. Decorator Pattern
The Decorator Pattern allows you to add behavior or responsibilities to an object dynamically. It’s useful when you want to add features to an object without modifying its structure.

**Usage Example:**
```javascript
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
console.log(coffee.cost()); // Output: 7
```

### Behavioral Patterns

#### 1. Observer Pattern
The Observer Pattern is a behavioral design pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them of state changes.

**Usage Example:**
```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
}

class Observer {
  update() {
    console.log('Observer updated');
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.addObserver(observer1);
subject.notifyObservers(); // Output: Observer updated
```

#### 2. Strategy Pattern
The Strategy Pattern allows you to define a family of algorithms, encapsulate each one as a separate class, and make them interchangeable. This enables you to select an algorithm at runtime.

**Usage Example:**
```javascript
class StrategyA {
  execute() {
    console.log('Executing strategy A');
  }
}

class StrategyB {
  execute() {
    console.log('Executing strategy B');
  }
}

class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

const context = new Context();
context.setStrategy(new StrategyA());
context.executeStrategy(); // Output: Executing strategy A
context.setStrategy(new StrategyB());
context.executeStrategy(); // Output: Executing strategy B
```

## How to Use

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/js-design-patterns.git
   ```
2. Navigate to the folder:
   ```bash
   cd js-design-patterns
   ```
3. Explore each pattern in its respective folder. Examples are provided to illustrate how each design pattern works.

4. You can also run the examples locally using Node.js:
   ```bash
   node path/to/example.js
   ```

## Contributing

We welcome contributions! If you have a design pattern that you would like to add or improve, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
