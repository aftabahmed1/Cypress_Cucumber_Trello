import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";
const trelloPage=require('../../../support/page-objects/trello-Page')
let data
    before(function () {
        //Added this as fetching the account and text inputs from json file under fixture
        //folder, done this as i believe it's easier to search or maybe cover login username or any data by this approach
        cy.fixture('fetchData').then(function (getData) {
            data = getData
        }).as('data')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    beforeEach(()=>{
        cy.Login(data.username,data.password)
        cy.visit('/')
    });
Given('A user opens the login page',()=>{
    cy.visit('/')
})
Then('A user can create a board',()=>{
    trelloPage.createBoard(data.minTitle)
})
And('A user can view in boards and click on the board',()=>{
    trelloPage.getTrelloBoard(data.minTitle)
})
Then('A user can update the board title',()=>{
    trelloPage.updateBoard(data.editTitle)
})

