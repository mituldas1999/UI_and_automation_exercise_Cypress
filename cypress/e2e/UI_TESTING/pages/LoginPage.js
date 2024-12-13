class LoginPage {
    visit() {
      // Use the relative path for login
      cy.visit('/login'); // Dynamically uses the baseUrl from cypress.config.js
    }
  
    fillEmail(email) {
      cy.get('[data-qa="login-email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('[data-qa="login-password"]').type(password);
    }
  
    submitLogin() {
      cy.get('[data-qa="login-button"]').click();
    }
  }
  
  export default LoginPage;  