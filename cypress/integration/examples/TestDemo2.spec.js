describe('Test Suite', function(){

    it('Test Case No 1', function(){

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#HTML9>div>button').click();

        cy.on('window:confirm' , function(str){

            

            expect(str).to.eq('Press a button!');

        });

        

    });

});