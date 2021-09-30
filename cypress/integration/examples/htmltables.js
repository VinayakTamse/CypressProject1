

describe('Test Suite', function () {

    it('Table Validations', function () {

        cy.log('Starting The Test');

        cy.visit('https://www.w3schools.com/html/html_tables.asp');

        cy.url().should('eq', 'https://www.w3schools.com/html/html_tables.asp');

        //table[id=customers] > tbody > tr:nth-child(2)

        //table[id=customers] > tbody > tr:nth-child(2)>td:nth-child(1)

        for (let row = 2; row < 7; row++) {
            for (let col = 1; col < 3; col++) {
                const TableData = cy.get('table[id=customers] > tbody > tr:nth-child(' + row + ')>td:nth-child(' + col + ')');

                TableData.each(function ($ele, index, $list) {

                    cy.log(index + " : " + $ele.text());

                });
            }
        }








    });

    it('Test case 2', function () {


        cy.visit('https://www.amazon.in/');

        let urlAmazon = cy.url();

        urlAmazon.then((str)=>{

            expect(str).to.equal('https://www.amazon.in/');

        });
    })

});