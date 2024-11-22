export class Light {
  location!: string;

  constructor(location: string) {
    this.location = location;
  }

  on() {
    console.log("Light is turned on.");
  }

  off() {
    console.log("Light is turned off.");
  }
}
