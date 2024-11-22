import { Light } from "../recieverClasses/light";

export class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
