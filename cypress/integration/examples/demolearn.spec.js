describe('Test Case Suite', function () {

    it('Test Case 1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get('input#btnLogin').then(str => {

            expect(str.val()).to.be.eq('LOGIN');

        });

        let value = cy.get('input#btnLogin').invoke('val');
        cy.log(value);

    });

    it('Handle Tabs', ()=> {

        cy.visit('https://www.w3schools.com/howto/howto_js_tabs.asp');

        cy.get("p [target='_blank']").invoke('removeAttr', 'target').click();

    });

});