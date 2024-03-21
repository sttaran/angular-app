/// <reference types = "cypress" />

export default class EditUserRow {
  _cellContainerSelector = 'tr table-cell-edit-mode'

  constructor(editMode = false) {
    this.isEdit = editMode
  }

  fillAndSave({id, firstName, lastName, email, username, age}){
    this.idInput.clear().type(id)
    this.firstNameInput.clear().type(firstName)
    this.lastNameInput.clear().type(lastName)
    this.emailInput.clear().type(email)
    this.userNameInput.clear().type(username)
    this.ageInput.clear().type(age)

    this.saveButton.click()
  }

  get saveButton(){
    return cy.get(this.isEdit ? '.ng2-smart-action-edit-save' : 'tr a.ng2-smart-action-add-create')
  }

  get idInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="id"]`)

  }

  get firstNameInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="firstName"]`)
  }

  get lastNameInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="lastName"]`)
  }

  get userNameInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="username"]`)
  }

  get emailInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="email"]`)
  }

  get ageInput(){
    return cy.get(`${this._cellContainerSelector} input[ng-reflect-name="age"]`)
  }
}
