import {driver} from "@wdio/globals";

export class HomePage {
    async startApp() {
        await driver.pause(2000);
    }
}