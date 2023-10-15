beforeEach(() => {
  cy.request('https://api.publicapis.org/entries').as('apiRequest');
});

it('Validating 200 status', () => {
  cy.get('@apiRequest').then((response) => {
    expect(response.status).to.eq(200);
  });
});

  it('Comparing, counting, and verifying objects with Category: Authentication & Authorization', () => {
    cy.get('@apiRequest').then((response) => {
      const allObjects = response.body.entries;
      const authAndAuthObjects = allObjects.filter((entry) => entry.Category.includes('Authentication & Authorization'));
  
      const actualCount = authAndAuthObjects.length;
      const expectedCount = allObjects.filter((entry) => entry.Category.includes('Authentication & Authorization')).length;
  
      expect(actualCount).to.eq(expectedCount);
  
      console.log('All objects:', allObjects);
      console.log('Found objects:', authAndAuthObjects);

      cy.log('All objects:', allObjects);
      cy.log('Found objects:', authAndAuthObjects);
    });
  });
  
  