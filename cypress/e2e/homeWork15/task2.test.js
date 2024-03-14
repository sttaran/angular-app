import './commands'

describe("login",{ }, ()=>{
    it('login and check url', ()=>{
      cy.login('semen@ii.io', 'password')
    })
  })  
