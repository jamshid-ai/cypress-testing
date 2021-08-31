describe('delete Post', () => {
    it('should delete post', () => {
        cy.login().then((response) => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:4000/posts',
                headers: {
                    "token": response.body.token,
                },
                body: {
                    'id': 9
                }
            }).then(response => {
                expect(response.status).to.equal(200);
            })
        })
    })
})