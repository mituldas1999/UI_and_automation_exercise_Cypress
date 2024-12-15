class HomePage {

    
    navigateCategory() {
        // Click the "Men" category
        cy.get(':nth-child(2) > .panel-heading > .panel-title').contains('Men').click();
    }
    
    jeansCategory() {
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').contains('Jeans').click() // Adjust selector if necessary
    }    
    
}

export default HomePage;
