const { getByAltText } = require(`@testing-library/dom`)

describe(`empty spec`, () => {
  it(`passes`, () => {
    cy.visit(`https://it3049c-students.github.io/js-tooling-lab-daltonco/`)
    cy.get(`#username`)
      .type(`Colton Dalton`)
    cy.get(`#start-game-button`)
      .click()
    cy.get(`#user-selection`)
      .select(`Paper`)
    cy.get(`#go-button`)
      .click()
    cy.get(`#game-history`)
      .should(`contain`, `Colton Dalton`)

  })
})