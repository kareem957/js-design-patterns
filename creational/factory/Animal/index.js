// Usage

const AnimalFactory = require("./AnimalFactory");

const animalFactory = new AnimalFactory();

const dog = animalFactory.createAnimal("dog");
console.log(dog.makeSound()); // Output: 🐕 - Woof !!!

const cat = animalFactory.createAnimal("cat");
console.log(cat.makeSound()); // Output: 🐱 - Meow !!!

const cow = animalFactory.createAnimal("cow");
console.log(cow.makeSound()); // Output: 🐮 - Moo !!!