
describe('CSSLocators', function ()  {

it("Visiting birchbox.com", function visit ()  {
    cy.viewport(1800, 1000) 
    cy.visit("https://www.birchbox.com/")
     cy.scrollTo(0, 500)
    
      cy.get('[title="Search Birchbox"]').click({ force: true }).type(' Oil ')
     
    cy.get('[href="/products/coola-gradual-tan-dry-body-oil"] > .font-medium').click();

    

    
})

})


