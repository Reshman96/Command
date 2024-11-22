export class CeilingFan {
  static HIGH: number = 3;
  static MEDIUM: number = 2;
  static LOW: number = 1;
  static OFF: number = 0;
  location!: string;
  speed!: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  high(): void {
    this.speed = CeilingFan.HIGH;
    console.log("The fan is on high.");
  }

  medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log("The fan is on medium.");
  }

  low(): void {
    this.speed = CeilingFan.LOW;
    console.log("The fan is on low.");
  }

  off(): void {
    this.speed = CeilingFan.OFF;
    console.log("The fan is off.");
  }

  getSpeed(): number {
    return this.speed;
  }
}
