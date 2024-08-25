const callInstance = () => {
    let instance;

    function createInstance() {
        return {
            data: {}, // Example property
            getData() {
                return this.data;
            },
            setData(key, value) {
                this.data[key] = value;
            },
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
}
const Singleton = (callInstance)();

module.exports = Singleton;
