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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("LoginAction", (user, password) => {

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers');

    cy.get('#txtUsername').type(user);

    cy.get('#txtPassword').type(password);

    cy.get('#btnLogin[name=Submit]').click();

});

Cypress.Commands.add('SendKeys', function(locatorType, locatorValue, value){

    switch (locatorType)
    {
        case "css":
            cy.get(locatorValue).type(value).wait(3000).should('contain.value', value);

            break;

        case "xpath":
            cy.xpath(locatorValue).type(value).should('include.value', value);
            break;

        default:
            cy.log('No Such Locator Type');
            break;

    }

});

Cypress.Commands.add('VerifyInputBoxes', (locatorValue) => {

    cy.get(locatorValue).should('be.visible').should('be.enabled').should('be.empty');

});

