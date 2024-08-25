class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.data = {}; // Example property
        Singleton.instance = this;
    }

    getData() {
        return this.data;
    }

    setData(key, value) {
        this.data[key] = value;
    }
}

module.exports = Singleton;
