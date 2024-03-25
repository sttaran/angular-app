describe('modal-overlays', () => {
  it('Click Button and Verify Modal Dialog', () => {
    const containerSelector = 'ngx-modal-overlays nb-card';
    cy.visit('http://localhost:4200/pages/modal-overlays/dialog');
    cy.contains('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition', 'Enter Name').click();
    cy.get('button[status="success"].appearance-filled.size-medium.shape-rectangle.nb-transition')
      .should('exist')
      .and('be.visible');

  });
});
