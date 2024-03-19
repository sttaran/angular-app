import AuthTab from "../../page-Objects/AuthTab.js";

const authTab = new AuthTab();

describe("Auth tab functionality", () => { 
    it("Login to dashboard", () => { 
      cy.visit("/auth/login"); 
      authTab.login();
      cy.url({timeout: 6000}).should("contains", "/pages/dashboard")
    });
  });