describe('template spec', () => {
    it('passes', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users?page=2',
        body: {
            "name": "Naruto",
            "job": "hokaje"
          }
        }).as('response')
    
       cy.get('@response').then(res => {
         console.log(res)
          expect(res.status).to.be.equal(201)
       })
    })

   
      it('passes', () => {
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/users?page=2',
          body: {
              "name": "Ana",
              "job": "testera"
            }
          }).as('response')
    
          cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(201)   
        }).then(res => {   
            cy.request({
              method:  'PUT',
              url: `https://reqres.in/api/users/${res.body.id}`,
              body:{
                "name": "morpheus",
                "job": "zion resident"
                }
            })
          }).as('response')
    
            cy.get('@response').then(res => {
              console.log(res)
              expect(res.status).to.be.equal(200)   
          })
        })
      
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
          it('passes', () => {
            cy.request({
              method: 'POST',
              url: 'https://reqres.in/api/users?page=2',
              body: {
                  "name": "Ana",
                  "job": "testera"
                }
              }).as('response')
        
              cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).to.be.equal(201)   
            }).then(res => {   
                cy.request({
                  method:  'DELETE',
                  url: `https://reqres.in/api/users/${res.body.id}`,
                  body:{
                    "name": "morpheus",
                    "job": "zion resident"
                    }
                })
              }).as('response')
        
                cy.get('@response').then(res => {
                  console.log(res)
                  expect(res.status).to.be.equal(204)   
              })
            })
  })