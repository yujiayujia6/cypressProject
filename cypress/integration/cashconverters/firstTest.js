/// <reference types="Cypress" />

context('example test', () => {
    beforeEach(() => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
    //   cy.get('.navbar-nav').contains('Commands').click()
    //   cy.get('.dropdown-menu').contains('Navigation').click()
    })
  
    it('cy.visit() - visit a remote url', () => {
      // Pass options to the visit
    //   cy.visit('https://example.cypress.io/commands/navigation', {
    //     timeout: 50000, // increase total time for the visit to resolve
    //     onBeforeLoad (contentWindow) {
    //       // contentWindow is the remote page's window object
    //       expect(typeof contentWindow === 'object').to.be.true
    //     },
    //     onLoad (contentWindow) {
    //       // contentWindow is the remote page's window object
    //       expect(typeof contentWindow === 'object').to.be.true
    //     },
    //   })
    })
  })