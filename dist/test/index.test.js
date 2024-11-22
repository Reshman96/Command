import { describe, expect, test, vi } from "vitest";
import { RemoteControl } from "./invoker/remoteControl";
import { CeilingFanOffCommand } from "../src/concreteCommands/ceilingFanOffCommand";
import { CeilingFanOnCommand } from "../src/concreteCommands/ceilingFanOnCommand";
import { LightOffCommand } from "../src/concreteCommands/lightOffCommand";
import { LightOnCommand } from "../src/concreteCommands/lightOnCommand";
import { CeilingFan } from "../src/recieverClasses/ceilingFan";
import { Light } from "../src/recieverClasses/light";
describe("Loading remote with bindings", () => {
    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => { });
    let remoteControl = new RemoteControl();
    let livingRoomLight = new Light("Living Room");
    let kitchenLight = new Light("Kitchen");
    let ceilingFan = new CeilingFan("Living Room");
    let livingRoomLightOn = new LightOnCommand(livingRoomLight);
    let livingRoomLightOff = new LightOffCommand(livingRoomLight);
    let kitchenLightOn = new LightOnCommand(kitchenLight);
    let kitchenLightOff = new LightOffCommand(kitchenLight);
    let ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
    let ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    test("should turn on the living room light", () => {
        remoteControl.onButtonWasPushed(0);
        expect(consoleLogSpy).toHaveBeenCalledWith("Light is turned on.");
    });
    test("should turn off the living room light", () => {
        remoteControl.offButtonWasPushed(0);
        expect(consoleLogSpy).toHaveBeenCalledWith("Light is turned off.");
    });
});
