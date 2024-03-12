
describe('stepContent', () => {
    beforeEach(() => {
      cy.visit('/pages/layout/stepper')
    })

    it.only('check text', () => {
      const containerSelector = 'nb-stepper[orientation="horizontal"]'

      cy.get(`${containerSelector} button`).contains('prev').should("be.disabled")
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #1" )
      cy.get(`${containerSelector} button`).contains('next').should("be.enabled").click()
      
      cy.get(`${containerSelector} button`).contains('prev').should("be.enabled")
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #2" )
      cy.get(`${containerSelector} button`).contains('next').should("be.enabled").click()

      cy.get(`${containerSelector} button`).contains('prev').should("be.enabled")
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #3" )
      cy.get(`${containerSelector} button`).contains('next').should("be.enabled").click()

      cy.get(`${containerSelector} button`).contains('prev').should("be.enabled")
      cy.get(`${containerSelector} h3`).should("have.text", "Step content #4" )
      cy.get(`${containerSelector} button`).contains('next').should("be.disabled")

    })
  
  })