import { HomePage } from '../pageObjects/home.page.js';
import { LoginPage } from '../pageObjects/login.page.js';
import { RegisterPage } from '../pageObjects/register.page.js';
import { Helper } from '../pageObjects/helper.js';

context("Dado que você quer criar uma conta", () => {
    const homePage = new HomePage()
    const helper = new Helper()
    const loginPage = new LoginPage()
    const registerPage = new RegisterPage()

    describe('Quando você coloca dados válidos no registro', () => {
        it('Você cria uma conta com sucesso.', async () => {
            await homePage.startApp();
            await helper.openTab('profile');
            await loginPage.goRegister();
            await registerPage.successfulRegister();
        })
    })
})

