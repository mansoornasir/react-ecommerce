import Login from "../../src/ecomerce/components/Login"
describe('Login.cy.js', () => {
  it('playground', () => {
    cy.mount(<Login />)
    cy.get('#email').type("test@test.com")
    cy.get('#password').type("testingtesting")
    cy.get('.btn').click();
    cy.contains(/successfully logged in/i)
  })
})