/// <reference types="cypress"/>

describe('Validation of Unit Price of Apple mac book', function(){

    it('Test Case to Validate Price', function(){

       

        cy.visit('https://demo.nopcommerce.com/');

        cy.get("input[id=small-searchterms]").type("Apple MacBook Pro 13-inch");

        cy.get(".search-box-button").click();

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click();

        cy.get(".qty-input").clear().type("9");

        cy.get("input#add-to-cart-button-4").click();

        cy.wait(5000);

        cy.get("li#topcartlink > a > .cart-label").click();

        cy.wait(5000);

        cy.get("td.unit-price>span").contains("$1,800.00");
        

    });

    it('Validation of Search Field', function(){

        cy.visit('https://demo.nopcommerce.com/');

        cy.get('input#small-searchterms').should('be.visible').and('be.enabled').and("be.empty");

        cy.get('input#small-searchterms').type('Hello World').should('not.be.empty');

    });

});