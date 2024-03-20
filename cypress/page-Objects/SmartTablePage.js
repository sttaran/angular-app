import { faker } from '@faker-js/faker';

class SmartTablePage {
    createUser(user) {
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(2)').should("be.visible").type(user.id.toString());
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(3)').should("be.visible").type(user.firstName);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(4)').should("be.visible").type(user.lastName);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(5)').should("be.visible").type(user.username);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(6)').should("be.visible").type(user.email);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(7)').should("be.visible").type(user.age.toString());
        cy.get('.nb-checkmark').click();
    }

    filterCreatedUser(user) {
        cy.get('.ng2-smart-filters > .id').should("be.visible").type(user.id.toString());
        cy.get('.ng2-smart-filters > .firstName').should("be.visible").type(user.firstName);
        cy.get('.ng2-smart-filters > .lastName').should("be.visible").type(user.lastName);
        cy.get('.ng2-smart-filters > .username').should("be.visible").type(user.username);
        cy.get('.ng2-smart-filters > .email').should("be.visible").type(user.email);
        cy.get('.ng2-smart-filters > .age').should("be.visible").type(user.age.toString());
    }

    verifyCreatedUserData(newUser) {
        cy.get("tbody")
        .should("be.visible")
        .within(() => {
          cy.get(".ng2-smart-row").should("have.length", 1);
          cy.get(':nth-child(2)').should("contain.text", newUser.id);
          cy.get(':nth-child(3)').should("contain.text", newUser.firstName);
          cy.get(':nth-child(4)').should("contain.text", newUser.lastName);
          cy.get(':nth-child(5)').should("contain.text", newUser.username);
          cy.get(':nth-child(6)').should("contain.text", newUser.email);
          cy.get(':nth-child(7)').should("contain.text", newUser.age);
        });   
    }

    clearEditFields() {
        cy.get('[ng-reflect-name="id"]').clear();
        cy.get('[ng-reflect-name="firstName"]').clear();
        cy.get('[ng-reflect-name="lastName"]').clear();
        cy.get('[ng-reflect-name="username"]').clear();
        cy.get('[ng-reflect-name="email"]').clear();
        cy.get('[ng-reflect-name="age"]').clear(); 
    }     

    editUser(user) {
        const editedUser = {
            editedId: "edited" + user.id,
            editedFirstName: "edited" + user.firstName,
            editedLastName: "edited" + user.lastName,
            editedUsername: "edited" + user.username,
            editedEmail: "edited" + user.email,
            editedAge: "edited" + user.age
        };

        cy.get('[ng-reflect-name="id"]').type(editedUser.editedId);
        cy.get('[ng-reflect-name="firstName"]').type(editedUser.editedFirstName);
        cy.get('[ng-reflect-name="lastName"]').type(editedUser.editedLastName);
        cy.get('[ng-reflect-name="username"]').type(editedUser.editedUsername);
        cy.get('[ng-reflect-name="email"]').type(editedUser.editedEmail);
        cy.get('[ng-reflect-name="age"]').type(editedUser.editedAge);

        cy.get('.ng2-smart-action-edit-save').click();

        return editedUser;
    }

    verifyEditedUserData(user) {
        cy.get('.ng2-smart-row > :nth-child(2)').should("contain.text", user.editedId);
        cy.get('.ng2-smart-row > :nth-child(3)').should("contain.text", user.editedFirstName);
        cy.get('.ng2-smart-row > :nth-child(4)').should("contain.text", user.editedLastName);
        cy.get('.ng2-smart-row > :nth-child(5)').should("contain.text", user.editedUsername);
        cy.get('.ng2-smart-row > :nth-child(6)').should("contain.text", user.editedEmail);
        cy.get('.ng2-smart-row > :nth-child(7)').should("contain.text", user.editedAge);
    }

}

export default SmartTablePage;