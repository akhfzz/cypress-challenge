describe('Login to EDH website', function () {
  before(function () {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit(Cypress.env('URL'))
      cy.fixture('user').then(function (user) {
          this.user = user
      })
  })

  it('Validate successful Login', function () {
    cy.get('.mat-form-field-infix > input[name="email"]').type(this.user.email)
    cy.wait(600)
    cy.get('.mat-form-field-infix > input[name="password"]').type(this.user.password)
    cy.get('.mat-form-field-infix > #mat-select-0').click()
    cy.get('.mat-select-panel > #mat-option-3').click()
    cy.get('.mat-select-value >.mat-select-placeholder').click()
    cy.get('.mat-select-panel > #mat-option-6').click()
    cy.get('.mat-success').click()
    cy.wait(2000)
  })

  it('sidebar', () => {
    cy.get('.mat-mini-fab > .mat-button-wrapper > .mat-icon').wait(2000).click({force:true})

  })
})