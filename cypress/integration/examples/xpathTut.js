describe('Xpath Practice', () => {

    it('Test Case 1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers');

        cy.xpath('//input[contains(@id, "txtUsername")]').type('Admin');

        cy.xpath("//input[contains(@id, 'txtPassword')]").type('admin123');

        cy.xpath("//input[contains(@id, 'btnLogin')]").click();

        cy.title().should('equal', 'OrangeHRM');



    });

});