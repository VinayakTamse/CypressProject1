import LoginPage from "../Pages/LoginPage.js"

describe('Tests', function() {

    it('login', function() {

        const pageLogin = new LoginPage();

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        pageLogin.getUserName();

        pageLogin.getPassword();

        

        

    });

});