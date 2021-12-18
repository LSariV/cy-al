/// <reference types = "cypress" />




describe('navigating to alz home', () => {

    it('go to home page', () =>{

        //cy.visit('https://www.alzheimers.net/')
//cy.visit('https://www.alzheimers.net/?optimizely_disable=true')
        
cy.visit(Cypress.env('prod'))
})
})
