/// <reference types="Cypress" />

context('example test', () => {
    beforeEach(() => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
    //   cy.get('.navbar-nav').contains('Commands').click()
    //   cy.get('.dropdown-menu').contains('Navigation').click()
    })
  
    it('first test case', () => {
        cy.get('h3').contains('Select Store').should("visible");
    })
  })