class checkOut{
    proceedToCheckout(){
        cy.get('.col-sm-6 > .btn').click();
    }
    placeOrder(){
        cy.get(':nth-child(7) > .btn').click()
    }
}
export default checkOut;
