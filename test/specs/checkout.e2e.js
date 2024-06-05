import {Helper} from "../pageObjects/helper.js";
import {LoginPage} from "../pageObjects/login.page.js";
import {driver} from "@wdio/globals";
import {it} from "@faker-js/faker";
import {BrowsePage} from "../pageObjects/browse.page.js";

context("Dado que você quer comprar um produto", () => {
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
    describe('Quando você coloca o produto no carrinho e procede com a compra', () => {
        it('Então você escolhe o endereço.', async () => {
            await (await helper.getElementById('addToCart',true)).click()
            await (await helper.getElementById('selectAddressOrContinueToPayment', true)).click()
        })
    })
    describe('Quando você coloca os dados necessários', () => {
        it('Então você visualiza o pedido.', async () => {
            await (await helper.getElementById('address',true)).click()
            await (await helper.getElementById('checkout', true)).click()
        })
    })
})

