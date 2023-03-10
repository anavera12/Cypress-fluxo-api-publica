describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      body: {
          "name": "Naruto",
          "job": "hokaje"
        }
      }).as('response')
  
     cy.get('@response').then(res => {
       console.log(res)
        expect(res.status).to.be.equal(200)
     })
  })
})