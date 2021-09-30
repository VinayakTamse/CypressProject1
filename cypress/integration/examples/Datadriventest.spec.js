describe('Test suite', function () {

    before(function () {

        cy.fixture('TestData.json').then(data => {

            this.data = data;

        });

    });

    it('Test case no 1', function () {

        cy.LoginAction(this.data.user, this.data.password);



    });

});