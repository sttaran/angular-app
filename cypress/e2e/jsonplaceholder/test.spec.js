
describe('Json placehloder', {
  env : {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=>{

  // it('should make request', () => {
  //   cy.request(Cypress.env("api_url") + "/todos/1").then((v)=>{
  //     cy.log(JSON.stringify(v.body))
  //     console.log(v.body)
  //   })
  // });


  it('should make request', () => {
    cy.request(Cypress.env("API_URL") + "/todos/1").then((v)=>{
      cy.log(JSON.stringify(v.body))
      console.log(v.body)
    })
  });



})
