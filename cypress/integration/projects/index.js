describe('Projects', () => {
  const title = 'Cypress Test';
  const updatedTitle = 'Cypress Updated Title'

  beforeEach(() => {
    cy.visit('/projects')
  })

  describe('#create', () => {
    it('creates a new project', () => {
      cy.get('[data-test-id="title"]').type(title)
      cy.get('[data-test-id="details"]').type('I am running an automated test using Cypress. This is really cool!')
      cy.get('[data-test-id="save-button"]').click()
    });
  });

  describe('#read', () => {
    it('does X', () => {
    });
  });

  describe('#update', () => {
    it('updates a record', () => {
      cy.get('mat-list-item').last().click()
      cy.get('[data-test-id="title"]').clear().type(updatedTitle)
      cy.get('[data-test-id="details"]').clear().type('This is my update to my comments field!')
      cy.get('[data-test-id="save-button"]').click()
    });
  });

  describe('#delete', () => {
    it('deletes a record', () => {
      cy.get('mat-list-item').then((items) => {
        const lastItemIndex = items.length - 1;
        cy.get(`[data-test-id="project-${lastItemIndex}-delete-btn"]`).click();
      })
    });
  });
});






