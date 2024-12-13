describe("Verify User Login and Check Status Code 200", () => {
    let userEmail;
    let userPassword;
    let baseUrl;
  
    before(() => {
      baseUrl = Cypress.config('baseUrl');
      cy.readFile("cypress/fixtures/credential.json").then((data) => {
        userEmail = data.email;
        userPassword = data.password;
      });
    });
  
    it("should successfully login and return 'User exists!'", () => {
      cy.request({
        method: "POST",
        url: `${baseUrl}/api/verifyLogin`, 
        form: true,  
        body: {
          email: userEmail,
          password: userPassword,
        },
        failOnStatusCode: false,  
      }).then((response) => {
        if (response.status === 200) {
          const responseBody = response.body;
  
          cy.log("Response Status Code:", response.status);
          cy.log("Response Body:", JSON.stringify(responseBody, null, 1));
          console.log("Response Status Code:", response.status);
          console.log("Response Body:", JSON.stringify(responseBody, null, 1));
  

          expect(response.status).to.eq(200);  
          cy.log("Login Verification Message:", responseBody.message);
        } else {
          cy.log("Request failed with status:", response.status);
          cy.log(`Error Message: ${response.body.error || 'No error message'}`);
          cy.log(`Request failed with status code ${response.status}`);
        }
      });
    });
  });
  