import obj from "../Pages/loadFixture"

let objData;

cy.fixture('or.json').then(data => {

    objData = data;

});

class LoginPage  {

    


    getUserName()
    {
        cy.type(objData.username).type('Admin');
    }

    getPassword()
    {
        cy.type(objData.password).type('admin123');
    }

}

export default LoginPage