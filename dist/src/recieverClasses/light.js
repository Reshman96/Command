export class Light {
    location;
    constructor(location) {
        this.location = location;
    }
    on() {
        console.log("Light is turned on.");
    }
    off() {
        console.log("Light is turned off.");
    }
}
