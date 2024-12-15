import { faker } from '@faker-js/faker';  // Import faker
import 'cypress-file-upload';  // Import the file upload plugin

class ContactPage {
    // Selectors
    nameInput = 'input[placeholder="Name"]';
    emailInput = 'input[placeholder="Email"]';
    subjectInput = 'input[placeholder="Subject"]';
    messageInput = 'textarea[placeholder="Your Message Here"]';
    fileInput = 'input[type="file"]';
    submitButton = 'button:contains("Submit")';

    // Methods

    clickContractPage(){
        cy.get(':nth-child(9) > a').click()
    }
    fillName(name = "Mitul Das") {
        cy.get(this.nameInput).type(name);
    }

    fillEmail(email = faker.internet.email()) {
        cy.get(this.emailInput).type(email);
    }

    fillSubject(subject = faker.lorem.words(3)) {
        cy.get(this.subjectInput).type(subject);
    }

    fillMessage(message = faker.lorem.paragraph()) {
        cy.get(this.messageInput).type(message);
    }

    attachFile(filePath = 'Portal Report.png') { // Default path set to the new file
        cy.get(this.fileInput).attachFile(filePath); // File from cypress/fixtures
    }

    submitForm() {
        cy.get('[data-qa="submit-button"]').click();
    }

    // Additional method for verifying the success message
    verifySuccessMessage() {
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible'); // Customize success message if needed
    }
    HomeBTN(){
        cy.get('#form-section > .btn').click()
    }
}

export default ContactPage;
