class AccountInfo {
  visit() {
    cy.visit("/signup"); // Dynamically uses the baseUrl from cypress.config.js
  }

  nameTitle() {
    cy.get(':nth-child(3) > .top').click()
  }
  setPassword(password){
    cy.get('[data-qa="password"]').type(password)
  }
  setDateOfBirth(){
    cy.get('[data-qa="days"]').select(26)
    cy.get('[data-qa="months"]').select(6)
    cy.get('[data-qa="years"]').select('2021')
  }
  clickNewsleter(newsletter){
    cy.get('#newsletter').click(newsletter) 
   }
   setPartner(){
    cy.get('#optin').click()
   }

   setFirstName(firstName){
    cy.get('[data-qa="first_name"]').type(firstName)
   }
   setLastName(lastName){
    cy.get('[data-qa="last_name"]').type(lastName)
   }
   setCompanyName(companyName){
    cy.get('[data-qa="company"]').type(companyName)
   }
   setAddress1(fullAddress1){
    cy.get('[data-qa="address"]').type(fullAddress1)
   }
   setAddress2(fullAddress2){
    cy.get('[data-qa="address"]').type(fullAddress2)
   }
   setCountry(){
    cy.get('[data-qa="country"]').select("India")
   }
   setStete(stateName){
    cy.get('[data-qa="state"]').type(stateName)
   }
   setCity(cityName){
    cy.get('[data-qa="city"]').type(cityName)
   }
   setZIPcode(zipCode){
    cy.get('[data-qa="zipcode"]').type(zipCode)
   }
   setNumber(mobileNumber){
    cy.get('[data-qa="mobile_number"]').type(mobileNumber)
   }
   createAccountBTN(){
    cy.get('[data-qa="create-account"]').click()
   }
   continueBTN(){
    cy.get('[data-qa="continue-button"]').click()
   }

}
export default AccountInfo;

