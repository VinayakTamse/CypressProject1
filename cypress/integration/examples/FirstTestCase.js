describe("Test Suite A", function () {


    it("Verify The Title Amazon", function () {

        cy.visit("https://www.amazon.in");
        cy.title().should("eq", "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

    });

    it('Verify the Title Facebook', function () {

        cy.visit('https://www.amazon.in');
        cy.title().should('eq', 'facebook');

    });

});