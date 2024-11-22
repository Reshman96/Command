import { NoCommand } from "../concreteCommands/noCommand";
export class RemoteControlWithUndo {
    onCommands;
    offCommands;
    undoCommand;
    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);
        let noCommand = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    onButtonWasPushed(slot) {
        this.onCommands[slot].execute();
    }
    offButtonWasPushed(slot) {
        this.offCommands[slot].execute();
    }
}
