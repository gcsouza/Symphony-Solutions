import loc from './locators'


Cypress.Commands.add('homePage', () => {
    cy.get(loc.HOME.APP_LOGO).should('contain', 'Swag Labs')

})
