Cypress.Commands.add('login', (email, password) => {
  cy.visit("/auth/login")
  cy.get('input[id="input-email"]').type(email)
  cy.get('input[id="input-password"]').type(password)
  cy.get('span.custom-checkbox').click()
  cy.get('button').eq(0).click()
  cy.url({timeout: 10000}).should('include', `/pages/dashboard`)
})

