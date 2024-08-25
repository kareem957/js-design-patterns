// Usage

const VehicleFactory = require('./VehicleFactory');

try {
    const car = VehicleFactory.createVehicle('car');
    console.log(`Vehicle type: ${car.type}`);
    car.drive(); // Output: Driving a car...

    const truck = VehicleFactory.createVehicle('truck');
    console.log(`Vehicle type: ${truck.type}`);
    truck.drive(); // Output: Driving a truck...

} catch (error) {
    console.error(error.message);
}
