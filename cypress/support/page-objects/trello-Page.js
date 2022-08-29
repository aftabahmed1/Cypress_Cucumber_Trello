//Only felt to add this class for all the required cases objects, 
//achieved the results easily efficiently
const createBoard={
    selectormenu: '[data-test-id="header-create-menu-button"]',
    selectorCardCreate:'[data-test-id="header-create-board-button"]',
    boardTitle:'[data-test-id="create-board-title-input"]',
    submitButton:'[data-test-id="create-board-submit-button"]',
    trelloHome:'[data-loading="false"]',
    trelloBoardClick:'[class$="details-name"]'

}
const editBoard={
    editTitleSelector:'[class$="js-rename-board"]',
    newTitleSelector:'[class$="4cb"]'
}
class trelloPage {
    
    createBoard(inputVal) {
        cy.get(createBoard.selectormenu)
            .click();
            cy.get(createBoard.selectorCardCreate)
            .click();
            // Empty input check & disable button
            cy.get(createBoard.boardTitle)
            .invoke('val')
            .should('be.empty')
            cy.get(createBoard.submitButton)
            .should('be.disabled')

            // Create with min char 1 title
            cy.get(createBoard.boardTitle)
            .type(inputVal)
            cy.get(createBoard.submitButton)
            .should('not.be.disabled')
            .click()
    }
    getTrelloBoard(inputVal) {
        cy.get(createBoard.trelloHome).click();
        cy.get(createBoard.trelloBoardClick)
        .should('be.visible')
        .contains(inputVal)
        .click()
    }
    updateBoard(edit){
        cy.wait(4000)
        cy.get(editBoard.editTitleSelector)
        .click({force:true})
        .type(edit+'{enter}')
        cy.get(editBoard.newTitleSelector)
        .contains(edit)
    }
}
module.exports = new trelloPage();