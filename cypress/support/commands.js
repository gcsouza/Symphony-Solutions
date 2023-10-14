import loc from './locators'

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https:///www.saucedemo.com/')
    cy.get(loc.LOGIN.USER).type('standard_user')
    cy.get(loc.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(loc.LOGIN.BTN_LOGIN).click()

     cy.get(loc.ITEMS.SORT_CONTAINER).should('exist')
     cy.get(loc.ITEMS.SORT_CONTAINER).select('Name (A to Z)')
     cy.get('select').select('za');
     cy.get('select').should('have.value', 'za');

})
