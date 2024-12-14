class SignupPage {
    visit() {
      cy.visit('/login'); // Dynamically uses the baseUrl from cypress.config.js
    }
  
    fillName(name) {
      // Target the name input field using data attributes or a placeholder
      cy.get('[data-qa="signup-name"]').type(name);
    }
  
    fillEmail(email) {
      // Target the email input field using data attributes or a placeholder
      cy.get('[data-qa="signup-email"]').type(email);
    }
  
    submitSignup() {
      // Target the signup button
      cy.get('[data-qa="signup-button"]').click();
    }
  }
  
  export default SignupPage;
  