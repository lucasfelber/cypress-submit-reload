/// <reference types="cypress" />
describe('page', () => {

  it('does not work', () => {
    cy.visit('/signup')
    cy.get('input').type("hello")
    cy.get('form > button').click()
    cy.get('input').should("have.value", "hello")
  })
})
