import {Helper} from './helper.js';
import data from "../data/loginData.json" assert {type: 'json'};
import {driver} from "@wdio/globals";

export class LoginPage {
    helper = new Helper();

    async successfulLogin() {

        if (driver.isAndroid) {
            await this.helper.typeData('email', data.email);
            await this.helper.typeData('password', data.password);
            await $(`~ ${driver.isAndroid ? 'btnLogin' : 'Login'}`).click();
        }
        else {
            await this.helper.typeData('email', data.email, true);
            await this.helper.typeData('Password', data.password, true);
            await $(`~ ${driver.isAndroid ? 'btnLogin' : 'Login'}`).click();
        }
        await this.helper.getElementById('searchInput', true)
    }

    async goRegister() {
        const register = 'new UiSelector().text("Sign up")'
        const button = await $(`android=${register}`)
        await button.click()
    }
}