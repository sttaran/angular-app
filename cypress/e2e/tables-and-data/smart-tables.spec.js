describe("Smart tables functionality", () => { 
    it("Creates new user and checks if its added to the table", () => { 
      cy.visit("pages/tables/smart-table");
      cy.get(".ng2-smart-actions-title").should("be.visible").click();
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(2)').should("be.visible").type("1");
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(3)').should("be.visible").type("Jeri");
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(4)').should("be.visible").type("Lennit");
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(5)').should("be.visible").type("JerLen");
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(6)').should("be.visible").type("JeriLennit@gmail.com");
      cy.get('[ng2-st-thead-form-row=""] > :nth-child(7)').should("be.visible").type("21");
      cy.get('.nb-checkmark').click();

      //it("Filters created user")
      cy.get('.ng2-smart-filters > .id').should("be.visible").type("1");
      cy.get('.ng2-smart-filters > .firstName').should("be.visible").type("Jeri")
      cy.get('.ng2-smart-filters > .lastName').should("be.visible").type("Lennit")
      cy.get('.ng2-smart-filters > .username').should("be.visible").type("JerLen")
      cy.get('.ng2-smart-filters > .email').should("be.visible").type("JeriLennit@gmail.com")
      cy.get('.ng2-smart-filters > .age').should("be.visible").type("21")

      //it("Filter check")
      cy.get('.ng2-smart-row > :nth-child(2)')
      cy.get('.ng2-smart-row > :nth-child(3)')
      cy.get('.ng2-smart-row > :nth-child(4)')
      cy.get('.ng2-smart-row > :nth-child(5)')
      cy.get('.ng2-smart-row > :nth-child(6)')
      cy.get('.ng2-smart-row > :nth-child(7)')
    }); 
  });

//   function generateRandomName() {
//     const length = Math.floor(Math.random() * 7) + 3;
//     const name = Array.from({ length }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
//     return name;
//   }