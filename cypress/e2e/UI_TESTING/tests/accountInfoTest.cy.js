import { faker } from '@faker-js/faker'; // Correct import for Faker v8
import SignupPage from '../pages/SignupPage';
import AccountInfo from '../pages/accountInfo';
import homePage from '../pages/homePage';
import viewAndUpdate from '../pages/viewAndUpdate';
import checkOut from '../pages/checkOut';
import PaymentPage from '../pages/paymentPage';
import ContactPage from '../pages/contactPage';

describe('Signup and Account Info Flow', () => {
  const signupPage = new SignupPage();
  const accountInfo = new AccountInfo();
  const HomePage = new homePage();
  const viewAndUpdateInstance = new viewAndUpdate();
  const checkOutInstance = new checkOut();
  const PaymentPageInstance=new PaymentPage();
  const contactPageInstance=new ContactPage();

  before(() => {
    // Global setup code, if any, to run before all tests
    console.log('Setting up before all tests');
  });

  beforeEach(() => {
    // Visit the signup page before each test
    signupPage.visit();
  });

  it('should allow a user to sign up with valid information and complete account info', () => {
    // Generating random values using Faker
    const name = "Mitul Das"; // Static name for testing
    const email = faker.internet.email(); // Generates a random email
    const password = faker.internet.password(); // Generates a random password
    const firstName = "Mitul"; // Static first name
    const lastName = "Das"; // Static last name
    const companyName = faker.company.name(); // Generates a random company name
    const fullAddress1 = "123 Main St"; // Static street address
    const fullAddress2 = 'Apt 101'; // Static secondary address
    const stateName = "California"; // Static state
    const cityName = 'Los Angeles'; // Fixed city name typo
    const zipCode = "583673"; // Static zip code
    const mobileNumber = faker.phone.number('##########'); // Corrected to use faker.phone.number()

    // Step 1: Fill out and submit the signup form
    signupPage.fillName(name);
    signupPage.fillEmail(email);
    signupPage.submitSignup();
    cy.wait(2000); // Waits for 2000 milliseconds (2 seconds)

    // Step 2: Complete account information
    accountInfo.nameTitle(); // Example of clicking a title
    accountInfo.setPassword(password);
    accountInfo.setDateOfBirth(); // Set the default date of birth
    accountInfo.clickNewsleter(true); // Subscribe to the newsletter
    accountInfo.setPartner(); // Set partner option
    accountInfo.setFirstName(firstName);
    accountInfo.setLastName(lastName);
    accountInfo.setCompanyName(companyName);
    accountInfo.setAddress1(fullAddress1);
    accountInfo.setAddress2(fullAddress2);
    accountInfo.setCountry(); // Assuming country is pre-set (modify if needed)
    accountInfo.setStete(stateName); // Sets the state
    accountInfo.setCity(cityName); // Sets the city
    accountInfo.setZIPcode(zipCode); // Sets the ZIP code
    accountInfo.setNumber(mobileNumber); // Add mobile number
    accountInfo.createAccountBTN(); // Submit the form to create the account

    // Optionally, click on continue button if present
    accountInfo.continueBTN();
    HomePage.navigateCategory();
    HomePage.jeansCategory();

    viewAndUpdateInstance.viewProduct(); // Use the instance to call the method
    viewAndUpdateInstance.changeQuantity();
    viewAndUpdateInstance.cartProduct();
    viewAndUpdateInstance.viewCart();

    checkOutInstance.proceedToCheckout();
    checkOutInstance.placeOrder();


    PaymentPageInstance.fillCardName();
    PaymentPageInstance.fillCardNumber();
    PaymentPageInstance.fillCVC();
    PaymentPageInstance.fillExpirationDate();
    PaymentPageInstance.submitPayment();
    PaymentPageInstance.downloadInvoice();
    PaymentPageInstance.continueBTN()


    contactPageInstance.clickContractPage();
    contactPageInstance.fillName();
    contactPageInstance.fillEmail();
    contactPageInstance.fillSubject();
    contactPageInstance.fillMessage();
    contactPageInstance.attachFile();
    contactPageInstance.submitForm();
    contactPageInstance.verifySuccessMessage();
    contactPageInstance.HomeBTN();
  });
});
