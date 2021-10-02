/// <reference types="cypress"/>

describe('Mouse Over TestCase', function () {

    it("Test Case 1", function () {


        cy.visit('http://automationpractice.com/index.php');

        //cy.get('#block_top_menu>ul').find('li a[title=Women]').trigger('mouseover');

        //cy.contains('Evening Dresses').click();

        cy.get('.submenu-container').first().should('not.be.visible').invoke('show');

        cy.contains('T-shirts').click();

    });

    it('Test Case 2', () => {

        cy.visit('https://www.j2store.org/demo-stores.html');

       cy.get('.navbar-nav > li:nth-child(2)>span').trigger('mouseover');

       cy.wait(5000)

       cy.get('.navbar-nav > li:first-of-type > a').click();

       cy.url().should('include', 'download');



    });

});