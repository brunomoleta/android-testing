import {$} from "@wdio/globals";

export class Helper {
    async getElementById(id, isAccIs) {
        if (isAccIs) {
            return await $(`~${id}`)
        }
        return await $(`id:${id}`);
    }

    async typeData(id, text, isAcc) {
        const element = await this.getElementById(id, isAcc)
        await element.setValue(text);
    }

    async openTab(tab) {
        await (this.getElementById(tab, false)).click()
    }

    async openAccTab(tab) {
        await (await this.getElementById(tab, true)).click()
    }

}