const Page = require('../page-object/page')

class ElementPage extends Page {
    get elementButton(){
        return $(`.//span[text()='Buttons']`)
    }

    get clickMe(){
        return $(`.//button[.='Click Me']`)
    }

    get msgClick(){
        return $('#dynamicClickMessage')
    }

    get rightClick(){
        return $('#rightClickBtn')
    }

    get msgRightClick(){
        return $('#rightClickMessage')
    }

    get doubleClick(){
        return $('#doubleClickBtn')
    }

    get msgDoubleClick(){
        return $('#doubleClickMessage')
    }

    async btnElement(){
        await this.elementButton.scrollIntoView({block:'center', inline: 'center'})
        await this.elementButton.click()
    }
    async btnClickMe(){
        await this.clickMe.scrollIntoView({block:'center'})
        await browser.pause(2000)
        await this.clickMe.click()
        expect(await this.msgClick.getText()).toEqual("You have done a dynamic click")
    }

    async btnRightClick(){
        await browser.pause(2000)
        await this.rightClick.click({ button: 'right' })
        expect(await this.msgRightClick.getText()).toEqual("You have done a right click")
    }

    async btnDoubleClick(){
        await browser.pause(2000)
        await this.doubleClick.doubleClick()
        expect(await this.msgDoubleClick.getText()).toEqual("You have done a double click")
    }

}

module.exports = new ElementPage()