describe('CSSLocators', function ()  {

    it("Visiting birchbox.com", function visit ()  {
        cy.viewport(1800, 1000) 

        cy.visit("https://www.birchbox.com/")

        cy.get('a.rounded').click();

        cy.get('.button-secondary').click();

        cy.get('#first-name').click({ force: true }).type('Raffi');

        cy.get('#last-name').click({ force: true }).type('Minasyan')

         cy.get('#email').click().type('raffidiana@mail.ru');

         cy.get('#acceptMarketing').should('be.visible');


         cy.get('#acceptMarketing').check().should('be.checked')

         cy.get('.password-view-toggle-button').click();

         cy.get('#password').click({ force: true }).type('Aa123456')

         cy.get('.gap-6 > .justify-center').click();

    })

})