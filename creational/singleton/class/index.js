// Usage

const Singleton = require('./Singleton');

const instance1 = new Singleton();
instance1.setData("Name", "John");
instance1.setData("Age", 26);

const instance2 = new Singleton();
console.log(instance2.getData()); // Output: { key1: 'value1' }
console.log(instance1 === instance2); // Output: true