const Page = require('./page')

class FrontPage extends Page {
    get buttonElement(){
        return $(`.//h5[text()='Elements']`)
    }

    get buttonInteraction(){
        return $(`.//h5[text()="Interactions"]`)
    }

    async clickelement() {
        await this.buttonElement.scrollIntoView({block:'center'})
        await this.buttonElement.click()
    }

    async clickinteraction(){
        await this.buttonInteraction.scrollIntoView({block:'center'})
        await this.buttonInteraction.click()
    }
}

module.exports = new FrontPage()