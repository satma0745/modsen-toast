/// <reference types="cypress" />

describe('Test modsen-toast', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Overall workability', () => {
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()

    cy.get('#toasts-container > *').should('have.length', 3)
  })

  it('Notification description', () => {
    cy.get('#send-notification').click()

    const description = () =>
      cy.get('#toasts-container > div> #1 > div').first().get('div > p')

    description().first().should('have.text', 'Warning')
    description().last().should('have.text', 'Some warning message')
  })

  it('Notifications limit', () => {
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()

    cy.get('#send-notification').click()
    cy.get('#send-notification').click()

    cy.get('#toasts-container > *').should('have.length', 5)
    cy.wait(1500)
    cy.get('#toasts-container > *').should('have.length', 2)
  })

  it('Toast types config', () => {
    cy.get('#send-notification').click()

    cy.get('#toasts-container > div > div')
      .first()
      .should('have.css', 'background-color', 'rgb(244, 224, 72)')

    cy.get('#toasts-container > div > div > div > div > p')
      .first()
      .should('have.css', 'color', 'rgb(0, 0, 1)')
  })

  it('Toast spacings', () => {
    cy.get('#send-notification').click()
    cy.get('#send-notification').click()

    cy.get('#toasts-container').should('have.css', 'bottom', '20px')
    cy.get('#toasts-container').should('have.css', 'left', '20px')

    cy.get('#toasts-container > div')
      .first()
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -96)')
    cy.get('#toasts-container > div')
      .last()
      .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -202)')
  })

  it('Parent node', () => {
    cy.get('#send-notification').click()

    cy.get('#overlay > #toasts-container').should('have.length', 1)
  })
})
