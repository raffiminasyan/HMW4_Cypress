describe("Explicit Assertions", () => {
    it("should verify the user's name after login", () => {
        cy.visit("https://www.birchbox.com/profile");

        cy.get('#email').type('raffi_minasyan@edu.aua.am');
        cy.get('#password').type('QWERTY');
        cy.get('.max-w-sm > .button').click();
        cy.get('.container > [href="/profile"]').click();
        let expectedName = "Welcome Raf!";

        cy.get('.font-serif').should('contain', expectedName);
    });
});
