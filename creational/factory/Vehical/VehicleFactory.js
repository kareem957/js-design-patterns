// VehicleFactory.js

class Car {
    constructor() {
        this.type = 'Car';
    }
    drive() {
        console.log('Driving a car...');
    }
}

class Truck {
    constructor() {
        this.type = 'Truck';
    }
    drive() {
        console.log('Driving a truck...');
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

module.exports = VehicleFactory;
