/// <reference types = "cypress" />

import SmartTablePage from "../../pageObjects/SmartTablePage";

describe('Smart table', ()=>{
  const smartTablePage = new SmartTablePage()

  beforeEach(()=>{
    smartTablePage.visit()
  })

  it('should create user', ()=>{
    const userData = {
      id: 222,
      firstName: "Stanislav",
      lastName: "Taran",
      email: "stas@test.com",
      username: "staran",
      age: 28
    }

    const userRowForm = smartTablePage.clickNewUserButton()
    userRowForm.fillAndSave(userData)

    const createdUserRow = smartTablePage.findRowByUserId(userData.id)
    createdUserRow.id.should('have.text', String(userData.id))
    createdUserRow.firstName.should('have.text', userData.firstName)
    createdUserRow.lastName.should('have.text', userData.lastName)
    createdUserRow.email.should('have.text', userData.email)
    createdUserRow.userName.should('have.text', userData.username)
    createdUserRow.age.should('have.text', String(userData.age))
  })

  it('should edit user', ()=>{
    const userData = {
      id: 12,
      firstName: "Stanislav2",
      lastName: "Taran2",
      email: "stas2@test.com",
      username: "staran2",
      age: 29
    }

    const userRowBefore = smartTablePage.findRowByUserId(10)

    const userRowForm = userRowBefore.clickEditButton()
    userRowForm.fillAndSave(userData)

    const updatedUserRow = smartTablePage.findRowByUserId(userData.id)

    updatedUserRow.id.should('have.text', String(userData.id))
    updatedUserRow.firstName.should('have.text', userData.firstName)
    updatedUserRow.lastName.should('have.text', userData.lastName)
    updatedUserRow.email.should('have.text', userData.email)
    updatedUserRow.userName.should('have.text', userData.username)
    updatedUserRow.age.should('have.text', String(userData.age))
  })
})
