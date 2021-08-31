describe('Edit post', () => {
    it('should edit post', () => {
        cy.login().then((response) => {
            cy.request({
                method: 'PUT',
                url: 'http://localhost:4000/posts',
                headers: {
                    "token": response.body.token,
                },
                failOnStatusCode: false,
                body: {
                    'id': 10,
                    'column': 'content',
                    'value': 'edited post'
                }
            }).then((response) => {
                expect(response.status).to.equal(404);
            })
        })
    })
})