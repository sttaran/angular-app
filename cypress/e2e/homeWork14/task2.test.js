
describe('returnResultFromDialog', () => {
    beforeEach(() => {
      cy.visit('/pages/modal-overlays/dialog')
    })

    it.only('click button',() =>{
      const containerSelector = 'nb-dialog-container'
    cy.get(`button`).contains('Enter Name').should("be.enabled").click()
    cy.get(`${containerSelector}`).should("be.visible")
    cy.get(`${containerSelector} nb-card-header`).should("have.text", "Enter your name")
    cy.get(`${containerSelector} input`).should("be.enabled")
    cy.get(`${containerSelector} button`).contains('Cancel').should("be.enabled")
    cy.get(`${containerSelector} button`).contains('Submit').should("be.enabled")
    })
})
