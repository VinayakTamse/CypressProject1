let readData;

describe('Test Suite Orange Hrm' , function(){

    before(function(){

        cy.fixture('orange.json').then(data => {
            readData = data;
        })

      

    });

    it('Verify Title', function(){

        cy.launchApp(readData.url);


        cy.title().should('eql', 'OrangeHRM');

        cy.get('#logInPanelHeading').as('Head');

        cy.get('@Head').then($value => {
            return $value.text();
        }).as('textvalue');

        cy.get('@textvalue').then((str)=> {
            expect(str).to.eq('LOGIN Panel');
        })




    });

});