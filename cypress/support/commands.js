import loc from './locators'

const username = 'standard_user';
const password = 'secret_sauce';

Cypress.Commands.add('login', (user, passwrd) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loc.LOGIN.USER).type(username)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('homePage', () => {
    cy.get(loc.HOME.APP_LOGO).should('contain', loc.HOME.TITTLE)
})

Cypress.Commands.add('functionTest', () => {
    cy.get(loc.ITEMS.SORT_CONTAINER).should('have.value', loc.ITEMS.NAME_AZ)
    cy.get(loc.ITEMS.SORT_CONTAINER).select(loc.ITEMS.ASCENDING_NAME_ORDER)

    cy.get('select').select(loc.ITEMS.DESCENDING_NAME_ORDER);
    cy.get('select').should('have.value', loc.ITEMS.DESCENDING_NAME_ORDER);
})
