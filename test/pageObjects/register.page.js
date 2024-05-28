import {Helper} from "./helper.js";
import {LoginPage} from "./login.page.js";
import {faker} from '@faker-js/faker';

export class RegisterPage {
    helper = new Helper();
    loginPage = new LoginPage();

    user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    async successfulRegister() {
        await this.loginPage.goRegister();

        await this.helper.typeData('firstName', this.user.firstName);
        await this.helper.typeData('lastName', this.user.lastName);

        await this.helper.typeData('phone', this.user.phone);
        await this.helper.typeData('email', this.user.email);

        await this.helper.typeData('password', this.user.password);
        await this.helper.typeData('repassword', this.user.password);

        await $(`id:create`).click();

        await this.helper.getElementId('searchInput')
    }
}