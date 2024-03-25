describe('modal-overlays', () => {
  it('Click Button and Verify Modal Dialog Content', () => {
    cy.visit('http://localhost:4200/pages/modal-overlays/dialog');
    cy.contains('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition', 'Enter Name').click();
    cy.get('input[placeholder="Name"].size-medium.status-basic.shape-rectangle.nb-transition')
      .should('exist');
    cy.get('nb-card-header').should('exist').and('contain', 'Enter your name');
    cy.get('button[status="success"].appearance-filled.size-medium.shape-rectangle.nb-transition')
      .should('exist')
      .and('contain', 'Submit');
    cy.get('button[status="danger"].appearance-filled.size-medium.shape-rectangle.nb-transition')
      .should('exist')
      .and('have.text', 'Cancel');

  });
});
