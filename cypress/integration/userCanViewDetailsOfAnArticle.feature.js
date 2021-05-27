describe('View details of an article', () => {
  before(() => {
    cy.intercept('GET', 'https://fakest-newz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    }),
    cy.viewport('iphone-x')
      cy.visit('/');
  });

  describe('By clicking on an article in list', () => {
    before(() => {
      cy.get('[data-testid=article-1]').click();
    });
    it('is expected to display a title', () => {
      cy.get('[data-testid=title]').should('contain.text', 'New Vaccine Conspiracy Theories Are Going Viral in Arabic');
    });
  });
});
