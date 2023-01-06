const Page = require('../page-object/page')

class InteractionPage extends Page {
    get btnDroppable(){
        return $(`.//span[text()="Droppable"]`)
    }

    get btnDragabble(){
        return $(`.//span[text()="Dragabble"]`)
    }

    get btnDrag(){
        return $('#draggable')
    }

    get btnDrop(){
        return $('#droppable')
    }

    async actionDragDrop(){
        await this.btnDrag.scrollIntoView({block:'center'})
        await this.btnDrag.dragAndDrop(await this.btnDrop)
        await browser.pause(2000)
    }

    async droppbtn(){
        //i use dragabble because if i use droppable to 'viewed' it cannot click bcs there google banner in front of it
        await this.btnDragabble.scrollIntoView({block:'center', inline: 'center'})
        await this.btnDroppable.click()
    }
}
module.exports = new InteractionPage()