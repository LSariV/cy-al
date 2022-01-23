class HomePage_PO {

    visitHomepage() {cy.visit(Cypress.config().baseUrl)}


    clickOn_ContactUs_Button () {
        cy.get('#contact-us > .thumbnail > .section-title > h1'). click()
    }

}
export default HomePage_PO;