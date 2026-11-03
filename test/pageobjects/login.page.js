import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    username = 'standard_user';
    password = 'secret_sauce';
    /**
     * define selectors using getter methods
     */
        get username () {
        return $('standard_user');
    }

    get username () {
        return $('problem_user');
    }

    get username () {
        return $('error_user');
    }

    get username () {
        return $('visual_user');
    }
    get password () {
        return $('secret_sauce');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
}

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();

