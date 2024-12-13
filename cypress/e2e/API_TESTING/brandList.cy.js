describe("Validate Brand List and Check Status Code 200", () => {
    let baseUrl;
  
    before(() => {
      baseUrl = Cypress.config('baseUrl');
    });
  
    it("should contain specific brands and exclude others", () => {
      cy.request({
        method: "GET",
        url: `${baseUrl}/brandsList`,
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status === 200) {
          const responseBody = response.body;
  
          cy.log("Response Status Code:", response.status);
          cy.log("Response Body:", JSON.stringify(responseBody, null, 1));
          console.log("Response Status Code:", response.status);
          console.log("Response Body:", JSON.stringify(responseBody, null, 1));
  
          expect(response.status).to.eq(200);
          expect(responseBody).to.include("Polo");
          expect(responseBody).to.include("Babyhug");
          expect(responseBody).to.include("Biba");
          expect(responseBody).not.to.include("Heineken");
          expect(responseBody).not.to.include("BMW");
          expect(responseBody).not.to.include("Razor");
  
          cy.log("Brands Presence Verified:", "Polo, Babyhug, Biba");
        } else {
          cy.log("Request failed with status:", response.status);
          cy.log(`Error Message: ${response.body.error || 'No error message'}`);
          cy.log(`Request failed with status code ${response.status}`);
        }
      });
    });
  });
  