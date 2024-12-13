import LoginPage from '../pages/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Load the credentials before each test
    cy.fixture('credential').as('userCredentials');
  });

  it('should navigate to the login page', () => {
    loginPage.visit();
    cy.url().should('include', 'login');
  });

  it('should log in successfully using dynamic credentials', function () {
    loginPage.visit();

    // Use the credentials loaded from the fixture
    loginPage.fillEmail(this.userCredentials.email);
    loginPage.fillPassword(this.userCredentials.password);
    loginPage.submitLogin();

    // Add assertions for post-login validation
    cy.url().should('not.include', 'login');
    cy.contains('AutomationExercise').should('be.visible');
  });
});
