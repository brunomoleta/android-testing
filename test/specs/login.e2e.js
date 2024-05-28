import { HomePage } from '../pageObjects/home.page.js';
import { LoginPage } from '../pageObjects/login.page.js';
import { Helper } from '../pageObjects/helper.js';

context("Dado que você quer entrar na sua conta", () => {
    const homePage = new HomePage()
    const helper = new Helper()
    const loginPage = new LoginPage()

    describe('Quando você coloca dados válidos no Login', () => {
        it('Então você é direcionado para o seu dashboard.', async () => {
            await homePage.startApp();
            await helper.openTab('profile');
            await loginPage.successfulLogin();
        })
    })
})

