import '../../support/commands'


describe('Validating successful login and name sorted test', () => {
    beforeEach (() => {
        cy.login()
    })
  
    it('Should verify title on the home page', () =>{
        cy.homePage()
    })

    it('Should Log in and check if the items are ordered correctly Name ( Z -> A)', () =>{
        cy.functionTest()
    })
})
