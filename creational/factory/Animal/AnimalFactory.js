class Dog {
    makeSound() {
        return "🐕 - Woof !!!";
    }
}

class Cat {
    makeSound() {
        return "🐱 - Meow !!!";
    }
}

class Cow {
    makeSound() {
        return "🐮 - Moo !!!";
    }
}

class AnimalFactory {
    createAnimal(type) {
        const Animals = {
            dog: Dog,
            cat: Cat,
            cow: Cow,
        };

        const AnimalClass = Animals[type];

        if (!AnimalClass) {
            throw new Error("Invalid Animal type");
        }

        return new AnimalClass();
    }
}

module.exports = AnimalFactory;
