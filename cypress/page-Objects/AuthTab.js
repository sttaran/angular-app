import { faker } from '@faker-js/faker';

class AuthTab {
    login() {
        cy.get('#input-email').type(faker.internet.email());
        cy.get('#input-password').type(faker.internet.password());
        cy.get('.custom-checkbox').click();
        cy.get('.appearance-filled').click();
    }
}

export default AuthTab;