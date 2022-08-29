// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// deleteReports.js
Cypress.Commands.add('Login', (username, password) => {
  cy.session([username,password], ()=>{
    cy.visit('/login')
    cy.get('#user').type(username)
    cy.get('[name=password]').type(password)
    cy.get('[class$=btn-success]')
      .click()
    cy.origin('https://id.atlassian.com/login',
      { args: {password : password} }
      , ({password}) => {
        cy.get('[name=password]').type(password)
        cy.get('#login-submit').click()
      })
     cy.get('[class*="boards-page-section-header-name"]')
     .contains('YOUR WORKSPACES')

  })
})