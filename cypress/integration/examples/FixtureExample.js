describe('Example Practice Fixture', function(){


    before(function() {

        cy.fixture('TestData.json').then(data => {

            this.data = data;

        });

    })

    it('Test Case No 1', function() {

        cy.visit(this.data.appUrl);

        cy.get('input#txtUsername').type(this.data.user);

        cy.get('input[name=txtPassword]').type(this.data.password);

        cy.get('#btnLogin[name=Submit]').click();

        cy.wait(3000);

    });

});