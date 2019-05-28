/// <reference types="Cypress" />

context('example test', () => {
    beforeEach(() => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
    })
  
    it('first test case', () => {
        cy.get('h3').contains('Select Store').should("visible");
        cy.get('button[data-id]').click();
        cy.get('.dropdown-menu[aria-expanded]').contains('CC Birkenhead').click();
        cy.get('form').submit();
        cy.get('#login').contains('CC Birkenhead').should("visible");
    })
  })