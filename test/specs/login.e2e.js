import { LoginPage } from '../pageObjects/login.page.js';
import { Helper } from '../pageObjects/helper.js';
import {driver} from "@wdio/globals";

context("Dado que você quer entrar na sua conta", () => {
    const helper = new Helper()
    const loginPage = new LoginPage()

    describe('Quando você coloca dados válidos no Login', () => {
        it('Então você é direcionado para o seu dashboard.', async () => {
            const profileTab = driver.isAndroid ? 'profile' : 'Account'

            await helper.openTab(profileTab);
            await loginPage.successfulLogin();
        })
    })
})

