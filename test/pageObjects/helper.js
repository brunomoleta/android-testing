import {$} from "@wdio/globals";

export class Helper {
    async getElementId(id){
        return await $(`id:${id}`);
    }
    async typeData(id, text) {
        const element = await this.getElementId(id)
        await element.setValue(text);
    }

    async openTab(tab) {
        await $(`id:tab-${tab}`).click()
    }

}