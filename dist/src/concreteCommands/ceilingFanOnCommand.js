import { CeilingFan } from "../recieverClasses/ceilingFan";
export class CeilingFanOnCommand {
    ceilingFan;
    prevSpeed;
    constructor(ceilingFan) {
        this.ceilingFan = ceilingFan;
        this.prevSpeed = ceilingFan.getSpeed();
    }
    execute() {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }
    undo() {
        if (this.prevSpeed === CeilingFan.HIGH) {
            this.ceilingFan.high();
        }
        else if (this.prevSpeed === CeilingFan.MEDIUM) {
            this.ceilingFan.medium();
        }
        else if (this.prevSpeed === CeilingFan.LOW) {
            this.ceilingFan.low();
        }
        else {
            this.ceilingFan.off();
        }
    }
}
