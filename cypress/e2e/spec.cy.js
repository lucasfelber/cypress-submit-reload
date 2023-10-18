/// <reference types="cypress" />
describe('page', () => {

  it('does not work', () => {
    cy.visit('/signup')

    cy.getByData("button-signup").click()

    cy.getByData("email").within(() => {
      cy.get(".text-input-label-appendage")
      .contains("Email is required")
    })

    cy.getByData("password").within(() => {
      cy.get(".text-input-label-appendage")
      .contains("Password is required")
    })
  })
})
