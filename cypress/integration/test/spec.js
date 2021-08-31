describe('blog testing', () => {
    it('posts get', () => {     
    cy.request({ 
        method: 'GET', 
        url: 'http://localhost:4000/posts'
        }).then((response) => {
        expect(response.status).to.equal(200);
        })
    })
  });