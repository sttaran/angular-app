import { faker } from '@faker-js/faker';

class SmartTablePage {
    createUser() {
        const user = {
            id: faker.number.int(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 100 })
        };

        cy.get('[ng2-st-thead-form-row=""] > :nth-child(2)').should("be.visible").type(user.id.toString());
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(3)').should("be.visible").type(user.firstName);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(4)').should("be.visible").type(user.lastName);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(5)').should("be.visible").type(user.username);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(6)').should("be.visible").type(user.email);
        cy.get('[ng2-st-thead-form-row=""] > :nth-child(7)').should("be.visible").type(user.age.toString());
        cy.get('.nb-checkmark').click();

        return user;
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
        cy.get(':nth-child(2)').should("contain.text", newUser.id);
        cy.get(':nth-child(3)').should("contain.text", newUser.firstName);
        cy.get(':nth-child(4)').should("contain.text", newUser.lastName);
        cy.get(':nth-child(5)').should("contain.text", newUser.username);
        cy.get(':nth-child(6)').should("contain.text", newUser.email);
        cy.get(':nth-child(7)').should("contain.text", newUser.age);
    }
}

export default SmartTablePage;