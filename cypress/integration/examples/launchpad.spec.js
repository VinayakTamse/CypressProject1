describe('Launching LaunchPad Service Tests', () => {

    it('Verify Url Test', () => {

        cy.visit('https://account.hana.ondemand.com/');

        cy.wait(10000);

        cy.url().should('contain', 'https://account.hana.ondemand.com/');

        cy.get('button#createSiteBtnId span:last-child>bdi').as('CreateSiteText');

        cy.get('CreateSiteText').should('be.visible');

        cy.get('CreateSiteText').then(str => {
            expect(str.text()).to.be('Create Site');
        })

    });

});