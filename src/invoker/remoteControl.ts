import { NoCommand } from "../concreteCommands/noCommand";

export class RemoteControl {
  onCommands!: Command[];
  offCommands!: Command[];
  undoCommand!: Command;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    let noCommand: Command = new NoCommand();
    for (let i: number = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
  }
}
