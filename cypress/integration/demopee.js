/// <reference types="cypress"/>

describe('Test Suite', function () {


    before(function () {


        cy.viewport(1080, 720);

        cy.visit("https://opensource-demo.orangehrmlive.com/")

    });



    it('Launch App', function () {



        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com');

        cy.title().should('eq', 'OrangeHRM');

        cy.get('#txtUsername[name=txtUsername]').should('be.enabled').should('be.visible').type('Admin');

        cy.get('#txtPassword').should('be.visible').type('admin123');


        cy.get('.button[type=submit]').should('be.visible').click();

        cy.url().should('include', 'dashboard');

        cy.get('a#welcome').click();

        cy.contains('Logout').click();





    });



});