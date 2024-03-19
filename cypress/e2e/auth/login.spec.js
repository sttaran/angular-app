import AuthTab from "../../page-Objects/AuthTab.js";

const authTab = new AuthTab();

describe("Auth tab functionality", () => { 
    it("Login to dashboard", () => { 
      cy.visit("/auth/login"); 
      authTab.login();
      cy.url().should("eq", "http://localhost:4200/pages/dashboard")
    }); 
  });