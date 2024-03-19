import SmartTablePage from "../../page-Objects/SmartTablePage.js";

const smartTablePage = new SmartTablePage();

describe("Smart tables functionality", () => {
  beforeEach(() => {
    cy.visit("pages/tables/smart-table");
  });

  it("Creates new user and checks if it's added to the table", () => {
    cy.get(".ng2-smart-actions-title").should("be.visible").click();
    const newUser = smartTablePage.createUser();
    smartTablePage.filterCreatedUser(newUser);
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get(".ng2-smart-row").should("have.length", 1);
        smartTablePage.verifyCreatedUserData(newUser);
      });
  });

  it.only("Creates new user and checks if it's added to the table", () => {
    cy.get(".ng2-smart-actions-title").should("be.visible").click();
    const newUser = smartTablePage.createUser();
    smartTablePage.filterCreatedUser(newUser);
    smartTablePage.verifyCreatedUserData(newUser);
    cy.wait(1000);
    cy.get(".nb-edit").click();
    smartTablePage.clearEditFields();
    const editedUser = smartTablePage.editUser(newUser);
    smartTablePage.verifyEditedUserData(editedUser);
  });
});