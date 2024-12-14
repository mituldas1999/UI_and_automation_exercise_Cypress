class HomePage {
    navigateCategory() {
        cy.contains(':nth-child(2) > .panel-heading > .panel-title').click('Men')
    }

    jeansCategory() {
        cy.contains('select[data-qa="category-dropdown"]').click('Jeans'); // Use appropriate selector for the dropdown
    }
}

export default HomePage;
