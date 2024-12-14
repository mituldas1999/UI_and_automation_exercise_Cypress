import { faker } from '@faker-js/faker';  // Correct import for faker
import SignupPage from '../pages/SignupPage';

describe('Signup Page', () => {
  const signupPage = new SignupPage();

  before(() => {
    // Global setup code, if any, to run before all tests
    console.log('Setting up before all tests');
  });

  beforeEach(() => {
    // Visit the signup page before each test
    signupPage.visit();
  });

  it('should allow a user to sign up with valid information', () => {
    const name = "Mitul Das";
    const email = faker.internet.email(); // Generates a random email

    // Fill in the signup form
    signupPage.fillName(name);
    signupPage.fillEmail(email);

    // Submit the form
    signupPage.submitSignup();
  });
});
