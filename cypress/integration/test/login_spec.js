describe('login', () => {
    it('correct login', () => {
        cy.login()
          .should((response) => {
              cy.log(JSON.stringify(response.body))
          });
    })
})