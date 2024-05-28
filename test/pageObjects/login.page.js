import {Helper} from './helper.js';
import data from "../data/loginData.json" assert {type: 'json'};

export class LoginPage {
    helper = new Helper();

    async successfulLogin() {
        await this.helper.typeData('email', data.email);
        await this.helper.typeData('password', data.password);

        await $(`id:btnLogin`).click();

        await this.helper.getElementId('searchInput')
    }
}