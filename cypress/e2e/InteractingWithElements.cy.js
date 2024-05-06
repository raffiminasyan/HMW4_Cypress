
describe('CSSLocators', function ()  {

    it("Visiting birchbox.com", function visit ()  {
        cy.viewport(1200, 800) 
        cy.visit("https://www.birchbox.com/")




cy.get(':nth-child(1) > [href="/collections/best-sellers"]').click()


cy.get('.py-3').click()

cy.get('#star-5').should('be.visible')

cy.get('#star-4').should('be.visible')

cy.get('#star-3').should('be.visible')

cy.get('#star-2').should('be.visible')

cy.get('#star-1').should('be.visible')

cy.get('#star-3').check().should('be.checked')

cy.get('#star-5').should('not.be.checked')




})

})