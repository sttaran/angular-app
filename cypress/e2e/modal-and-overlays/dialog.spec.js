describe("Dialog page functionality", () => { 
    it("Opening 'Enter your name' modal window", () => { 
      cy.visit("/pages/modal-overlays/dialog"); 
      cy.get(".result-from-dialog").find("button").click(); 
      cy.get(".ng-star-inserted > nb-card") 
        .should("be.visible") 
        .within(() => { 
          cy.get("nb-card-header").should("contain", "Enter your name"); 
          cy.get("nb-card-body > .size-medium").should("exist"); 
          cy.get(".cancel").should("be.visible"); 
          cy.get(".status-success").should("be.visible"); 
        }); 
    }); 
  });