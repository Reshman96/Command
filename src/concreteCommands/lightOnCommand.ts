import { Light } from "../recieverClasses/light";

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
