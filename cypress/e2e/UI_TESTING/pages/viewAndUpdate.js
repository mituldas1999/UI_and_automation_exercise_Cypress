class viewAndUpdate {
    viewProduct() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    }
    changeQuantity() {
        // Clear the existing value and set the quantity to 2
        cy.get('#quantity')
          .clear() // Clear any existing value in the input field
          .type('2') // Type '2' into the field
          .should('have.value', '2'); // Optionally, verify the input value is updated to '2'
    }
    cartProduct(){
        cy.get(':nth-child(5) > .btn').click();
    }
    viewCart(){
        cy.get('u').click();
    }
    
}

export default viewAndUpdate;
