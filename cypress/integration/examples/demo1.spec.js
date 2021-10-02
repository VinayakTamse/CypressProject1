let JsonData;

describe('Testsuite', function () {

    before(function () {
        cy.fixture('TestData.json').then(data => {
            JsonData = data;
        })

    });

    it('Test case', function () {

        cy.visit(JsonData.appurl);
        cy.get('.nav-line-1-container').within(() => {
            cy.contains('Hello, Sign in').click({ force: true });
        });
        cy.get('#ap_email').type(JsonData.user);
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type(JsonData.password);
        cy.get('#signInSubmit').click();

    });

    it('Test case 2', function(){

        cy.visit(JsonData.appurl);
        cy.get('#nav-flyout-accountList').should('be.hidden').invoke('show');

    });
});