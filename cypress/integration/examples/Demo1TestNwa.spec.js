var fetchedData;

describe('NWA Tests', function(){

    before(function(){

        cy.fixture('newTest.json').then(data => {
            fetchedData = data;
        });

    });

    it('Launch Nwa Page', function(){

        let url = fetchedData.protocol+"://"+fetchedData.host+"."+fetchedData.domain+":"+fetchedData.port+"/"+fetchedData.nwaSuffix;

        cy.visit(url);

        cy.wait(5000);

        cy.get('input#logonuidfield').type(fetchedData.user);

        cy.get('input#logonpassfield').type(fetchedData.password);

        cy.get('input[name=uidPasswordLogon]').click();

        cy.wait(5000);

        cy.xpath("//*[text()='Configuration']").click();

        cy.wait(3000);

        cy.xpath("(//*[text()='Processes and Tasks'])[2]").click();

        cy.contains('Process Repository').click();

        cy.xpath("//tbody[contains(@id,'CompView.ComponentTable-contentTBody')]/child::tr[2]/child::td[2]/descendant::span").type("*bapi*");

        cy.xpath("//tbody[contains(@id,'CompView.ComponentTable-contentTBody')]/child::tr[2]/child::td[2]/descendant::input").type('{enter}');

        cy.wait(5000);

        cy.contains('Start Process...').invoke('removeClass', 'lsButton__text').click({force:true});


    });

   

});