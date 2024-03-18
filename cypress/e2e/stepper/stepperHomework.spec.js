describe("stepper functionality", () => { 
    it("after click on next button moves to following step", () => { 
      const stepperSelector = ".col-lg-12 > nb-card-body"; 
      cy.visit("/pages/layout/stepper"); 
      cy.get(`${stepperSelector} h3`).contains("Step content #1"); 
      cy.get(`${stepperSelector} button`).contains("next").click(); 
      cy.get(`${stepperSelector} h3`).contains("Step content #2"); 
      cy.get(`${stepperSelector} button`).contains("next").click(); 
      cy.get(`${stepperSelector} h3`).contains("Step content #3"); 
      cy.get(`${stepperSelector} button`).contains("next").click(); 
      cy.get(`${stepperSelector} h3`).contains("Step content #4"); 
    }); 
  });