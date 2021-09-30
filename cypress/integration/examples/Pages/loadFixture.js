class LoadData {

    getData()
    {
        return cy.fixture('or.json');
    }

}

let obj = new LoadData();

export default obj