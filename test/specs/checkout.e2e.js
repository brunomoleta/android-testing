import {Helper} from "../pageObjects/helper.js";
import {LoginPage} from "../pageObjects/login.page.js";
import {driver} from "@wdio/globals";
import {it} from "@faker-js/faker";
import {BrowsePage} from "../pageObjects/browse.page.js";

context("Dado que você quer fazer uma compra", () => {
    const helper = new Helper()
    const loginPage = new LoginPage()
    const browse = new BrowsePage()

    describe('Quando você faz o login com dados válidos', () => {
        it('Então você é redirecionado para a página inicial.', async () => {
            const profileTab = driver.isAndroid ? 'profile' : 'Account'

            await helper.openAccTab(profileTab);
            await loginPage.successfulLogin();
        })
    })
    describe('Quando você acessar um produto', () => {
        it('Então visualiza os detalhes dele.', async () => {
            await helper.openAccTab("Browse",true)
            await browse.getShoeProduct()

        })
    })

})

