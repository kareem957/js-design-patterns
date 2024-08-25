// Usage

const Singleton = require('./Singleton');

const instance1 = Singleton.getInstance();
instance1.setData('Name', 'Robert');
instance1.setData('Age', 25);

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Output: { key1: 'value1' }
console.log(instance1 === instance2); // Output: true