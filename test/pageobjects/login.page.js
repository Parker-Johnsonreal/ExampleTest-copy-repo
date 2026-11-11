import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
   
    credentials = {
        users: {
            standard: 'standard_user',
            lockedOut: 'locked_out_user',
            problem: 'problem_user',
            performanceGlitch: 'performance_glitch_user',
            error: 'error_user',
            visual: 'visual_user'
        },
        password: 'secret_sauce'
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

    get errorMessage () {
        return $('[data-test="error"]');
    }

    
    async login (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
}

    
    open () {
        return super.open('');
    }
}

export default new LoginPage();

