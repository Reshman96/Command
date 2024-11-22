export class CeilingFan {
    static HIGH = 3;
    static MEDIUM = 2;
    static LOW = 1;
    static OFF = 0;
    location;
    speed;
    constructor(location) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }
    high() {
        this.speed = CeilingFan.HIGH;
        console.log("The fan is on high.");
    }
    medium() {
        this.speed = CeilingFan.MEDIUM;
        console.log("The fan is on medium.");
    }
    low() {
        this.speed = CeilingFan.LOW;
        console.log("The fan is on low.");
    }
    off() {
        this.speed = CeilingFan.OFF;
        console.log("The fan is off.");
    }
    getSpeed() {
        return this.speed;
    }
}
