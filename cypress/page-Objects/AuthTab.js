import { faker } from '@faker-js/faker';

class AuthPage {
    login() {
        cy.get('#input-email').type("somerandomemail@gmail.com");
        cy.get('#input-password').type("12345678");
        cy.get('.custom-checkbox').click();
        cy.get('.appearance-filled').click();
    }
}

export default AuthPage;