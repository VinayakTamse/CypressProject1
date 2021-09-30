describe('Test Case No 1', ()=> {

    it('Test 1', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.VerifyInputBoxes('input#txtUsername');
        cy.SendKeys('css','input#txtUsername', 'Admin');
        cy.VerifyInputBoxes('input#txtPassword');
        cy.SendKeys('xpath', "//input[@id='txtPassword']", 'admin123');
    })

})