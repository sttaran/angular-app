import AuthPage from "../../page-Objects/AuthTab.js";

const authPage = new AuthPage();

describe("Auth page functionality", () => { 
    it("Login to dashboard", () => { 
      cy.visit("/auth/login"); 
      authPage.login();
      cy.url({timeout: 6000}).should("contains", "/pages/dashboard")
    });
  });