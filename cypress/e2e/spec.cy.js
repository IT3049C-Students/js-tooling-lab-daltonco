const { getByAltText } = require(`@testing-library/dom`)

describe(`empty spec`, () => {
  it(`passes`, () => {
    cy.visit(`https://example.cypress.io`)
    cy.get(`text-area`)
      .type(`Colton Dalton`)
  })
})