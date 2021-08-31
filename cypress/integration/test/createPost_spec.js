describe('Create post', () => {
    it('should create new post', () => {
        cy.login().then((response) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:4000/posts',
                headers: {
                    "token": response.body.token,
                },
                body: {
                    "content": "post created successfully"
                }
            })
        })
    })
})