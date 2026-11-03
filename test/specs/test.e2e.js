import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Sauce Demo login', () => {
    it('should login with valid credentials', async () => {

        for (const user of ['standard_user', 'problem_user', 'error_user', 'visual_user']) {
            await LoginPage.open()
            await LoginPage.login(user, 'secret_sauce')

            await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'))
            await expect($('.title')).toHaveText('Products')

            console.log('CURRENT URL:', await browser.getUrl())
            await browser.deleteCookies()
        }
    })
})