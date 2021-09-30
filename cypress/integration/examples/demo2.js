/// <reference types="cypress"/>

describe('Validation Test Case 2', function () {

    it('Visit url', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers");

        cy.title().should('eq', 'OrangeHRM');

    });

    it('Login To Application', () => {

        cy.get('#txtUsername').should('be.visible').type('Admin');


        cy.get('#txtPassword').should('be.visible').type('admin123');

        cy.get('#btnLogin').should('be.visible').click();

        //cy.contains('Recruitment').click();


    });


    it('Verify Login Title', () => {

        cy.url().should('include', 'viewCandidates');

    });


    it('Logout from Application', function () {

        cy.get('a#welcome').click();

        cy.get('div#welcome-menu>ul>li:last-of-type').click();

    });

});