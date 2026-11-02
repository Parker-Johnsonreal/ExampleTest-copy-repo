import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Sauce Demo login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
                await LoginPage.open()
        console.log('CURRENT URL:', await browser.getUrl())
        await browser.pause(3000)

        await LoginPage.login(LoginPage.username, LoginPage.password)

        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
        await expect($('.title')).toHaveText('Products')
    })
})