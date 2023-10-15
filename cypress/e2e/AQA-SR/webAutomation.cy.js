/// <reference types="cypress-xpath" />

import loc from '../../support/locators'
import '../../support/commandsPage'


describe('Should test at a functional level', () => {

    before (() => {
        cy.login()
    })
  
    it('Should verify title', () =>{
        cy.homePage()
    })

})
