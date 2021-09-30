/// <reference types="cypress"/>

describe('Handling Alert', () => {

    it('Alert 1', () => {

        cy.viewport(1080, 720);

        cy.visit('https://ksrtc.in/oprs-web/');

        //Accepts Automatically

        // To Verify Message in Alerts we Have to Write Triiger Events

        cy.get('button.btn-booking').click();

        cy.on('window:alert', (str) => {

            expect(str).to.equal('Please select start place.');

        });





    });


    it('Alert 2', ()=> {

        cy.visit('http://testautomationpractice.blogspot.com/');

        cy.get('.widget-content>button:nth-child(1)').click();

        cy.on('window:confirm', str => {
            expect(str).to.equal('Press a button!');
        });

    });


});