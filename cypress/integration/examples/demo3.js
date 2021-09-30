describe('new test', () => {

    it('Launch App', () => {

        cy.visit('https://demo.nopcommerce.com/');

      cy.get(':nth-child(1) > .category-item > .title > a').click();

    });

});