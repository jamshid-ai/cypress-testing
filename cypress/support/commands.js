Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4000/signin',
        body: {
            "username": "usmonboy",
            "password": "111"
        },
    }).then((response) => {
        expect(response.status).to.equal(200);
    })
})