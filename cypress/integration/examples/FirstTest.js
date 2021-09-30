describe('This is First Test Suite', () => {


    it('Verify The url of facebook', () => {

        cy.visit('https://www.amazon.in');
        cy.url().should('eq', 'https://www.amazon.in/');

    });


});