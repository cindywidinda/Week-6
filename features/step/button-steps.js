const {Given, When, Then} = require('@wdio/cucumber-framework');
const ElementPage = require('../page-object/element-page');
const FrontPage = require('../page-object/front-page');
const InteractionPage = require('../page-object/interaction-page')

Given ('I am on the front page', async() => {
    await FrontPage.open()
})

When ('I click on the element area', async() =>{
    await FrontPage.clickelement()
})

Then('I click buttons', async() => {
  await ElementPage.btnElement()
  await ElementPage.btnClickMe()
  await ElementPage.btnRightClick()
  await ElementPage.btnDoubleClick()
  await browser.pause(2000)
})

When('I Click on the Interaction area', async() => {
  await FrontPage.clickinteraction()
})

Then('I try to Drag and Drop', async() => {
  await InteractionPage.droppbtn()
  await InteractionPage.actionDragDrop()
  await browser.pause(2000)
})

