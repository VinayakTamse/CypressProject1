/// <reference types="cypress"/> 
// To Get Cypress Methods Suggession

//Mocha Framework

describe('The Test Suite', () => {

    before(() => {

        // Open The Url

        

        cy.visit('http://demo.automationtesting.in/Register.html');
       

    })


    it('Test Case No 1 : Title Validation', () => {



        //Validating Title

        cy.title().should('eq', 'Register');


    }


    );

    it('Test Case No 2 : Input Fields Validation', () => {

        //Validating Input Field

        cy.get('[ng-model=FirstName]').should('be.visible').type('Vinayak');

        cy.get('[ng-model=LastName]').should('be.visible').type('Tamse');

        cy.get('[ng-model=Adress]').should('be.visible').type('Madhyewada Kodibag Karwar');

        cy.get('input[type=email]').should('be.visible').type('vinayaktamse012gmail.com');

        cy.get('input[ng-model=Phone]').should('be.visible').type('7760369583');

    }
    );

    it('Test Case No 3 : Validations of Radio Button', function () {

        cy.get('input[value=Male]').should('not.be.checked').check().should('be.checked');

        cy.get('input[value=FeMale]').should('not.be.checked');

    });

    it('Test Case No 4 : Validation of Check Boxes', function () {

        cy.get('#checkbox1').should('not.be.checked').check().should('be.checked');
        cy.get('#checkbox2').should('not.be.checked').check().should('be.checked');
        cy.get('#checkbox3').should('not.be.checked').check().should('be.checked');

    });

    it('Test Case No 5 : Uncheck CheckBoxes', () => {

        cy.get('#checkbox1').should('be.checked').uncheck().should('not.be.checked');
        cy.get('#checkbox2').should('be.checked').uncheck().should('not.be.checked');
        cy.get('#checkbox3').should('be.checked').uncheck().should('not.be.checked');

    });

    it('Test Case No 6 : Select Multiple Check box', () => {

        cy.get('input[type=checkbox]').check(['Cricket', 'Movies']);

    });

    it('Test Case No 7 : Multiple Selection', () => {

        let mulselect = cy.get('.ui-autocomplete-multiselect[id=msdd]');
        mulselect.click();
        let ListOf = cy.get('a.ui-corner-all');
        ListOf.contains('English').click();
        ListOf = cy.get('a.ui-corner-all');
        ListOf.contains('Hindi').click();


    });

    it('Test Case No 8 : Select with select method', () => {

        cy.get('#Skills').select('Java', { force: true }).should('have.value', 'Java');

        cy.get('select#countries').select('India', { force: true }).should('have.value', 'India');

    });

    it('Test Case No 9 : Select By Seaching Type', () => {

        cy.get('.select2-selection--single').click();

        cy.get('input.select2-search__field').type('Ind');

        cy.get('input.select2-search__field').type('{enter}');

        cy.get('#select2-country-container').should('have.text', 'India');

    });

    after(()=> {
        console.log('===Execution Endede===');
    })

}

);