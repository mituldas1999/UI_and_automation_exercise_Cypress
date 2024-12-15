import { faker } from '@faker-js/faker';

class PaymentPage {
    cardNameInput = '[data-qa="name-on-card"]';
    cardNumberInput = '[data-qa="card-number"]';
    cvcInput = '[data-qa="cvc"]';
    expirationMonthInput = '[data-qa="expiry-month"]';
    expirationYearInput = '[data-qa="expiry-year"]';
    payButton = '[data-qa="pay-button"]';

    // Methods
    fillCardName(name = "Mitul Das") {
        cy.get(this.cardNameInput).type(name);
    }

    fillCardNumber(cardNumber = faker.finance.creditCardNumber()) {
        cy.get(this.cardNumberInput).type(cardNumber);
    }

    fillCVC(cvc = faker.finance.creditCardCVV()) {
        cy.get(this.cvcInput).type(cvc);
    }

    fillExpirationDate(
        month = faker.date.future().getMonth() + 1,
        year = faker.date.future().getFullYear()
    ) {
        const formattedMonth = month.toString().padStart(2, '0'); // Ensure 2-digit month
        cy.get(this.expirationMonthInput).type(formattedMonth);
        cy.get(this.expirationYearInput).type(year.toString());
    }

    submitPayment() {
        cy.get(this.payButton).click();
    }
    downloadInvoice(){
        cy.get('.col-sm-9 > .btn-default').click()
    }
}

export default PaymentPage;
