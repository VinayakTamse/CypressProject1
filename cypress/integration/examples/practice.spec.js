/// <reference types="cypress"/>


describe('Test Suite No 1', function () {

    it('Test Case 1', function () {

        cy.visit('https://www.amazon.in');

        cy.wait(5000);

        it('Verify Url', ()=>{

            expect(cy.url()).to.equal("https://www.amazon.in");

        });

        cy.get('#nav-link-accountList-nav-line-1').contains('Hello, Sign in').click();

        cy.go('back');

        cy.wait(2000);

        //cy.go('forward');

        //cy.wait(3000);

        //cy.reload();

        //cy.go('back');

        cy.get('#nav-xshop-container div > a').should('have.length', 28);

        cy.get('#nav-xshop-container div').find('a').contains('Electronics').click();

        cy.get('.nav-search-field').within(() => {

            cy.get('#twotabsearchtextbox').type('Apple');

        });

    });

});