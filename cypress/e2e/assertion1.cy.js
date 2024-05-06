describe("Assertion Demo", () => {
    it("Implicit Assertions", () => {
        cy.viewport(1800, 1000);
        
        cy.visit("https://www.birchbox.com/");
        
        cy.url().should('include', 'birchbox.com');
        cy.url().should('eq', 'https://www.birchbox.com/');
        cy.url().should('contain', 'birchbox');

        cy.get('.z-50 > .py-4').should('be.visible');
        cy.get('.z-50 > .py-4').should('exist');
    });
});
