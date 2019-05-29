/// <reference types="Cypress" />

context('example test', () => {
    let testData;
    before(() => {
        // cy.fixture("testData").as("testData");
    });
    beforeEach(() => {
        cy.fixture('testData').then(c => {testData = c});
        cy.login(Cypress.env('username'), Cypress.env('password'));
    })
    it(`test case`, () => {
        cy.wrap(testData).each(td => {
            cy.get('h3').contains('Select Store').should("visible");
            cy.get('button[data-id]').click();
            cy.get('.dropdown-menu[aria-expanded]').contains(td.store).click();
            cy.get('form').submit();
            cy.get('#login').contains(td.store).should("visible");
        })
    })
    
})