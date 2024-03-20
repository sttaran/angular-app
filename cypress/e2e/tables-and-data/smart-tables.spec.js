import SmartTablePage from "../../page-Objects/SmartTablePage.js";
import { faker } from '@faker-js/faker';

const smartTablePage = new SmartTablePage();

describe("Smart tables functionality", () => {
  beforeEach(() => {
    cy.visit("pages/tables/smart-table");
  });

  it("Creates new user and checks if it's added to the table", () => {
    cy.get(".ng2-smart-actions-title").should("be.visible").click();
    
    const user = {
      id: faker.number.int(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 100 })
    };

    smartTablePage.createUser(user);
    smartTablePage.filterCreatedUser(user);
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get(".ng2-smart-row").should("have.length", 1);
        smartTablePage.verifyCreatedUserData(user);
      });
  });

  it("Creates new user, edits it and checks if edited values are added to the table", () => {
    cy.get(".ng2-smart-actions-title").should("be.visible").click();
    
    const user = {
      id: faker.number.int(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 100 })
    };

    smartTablePage.createUser(user);
    smartTablePage.filterCreatedUser(user);
    smartTablePage.verifyCreatedUserData(user);
    cy.wait(1000);
    cy.get(".nb-edit").click();
    smartTablePage.clearEditFields();
    const editedUser = smartTablePage.editUser(user);
    smartTablePage.verifyEditedUserData(editedUser);
  });
});