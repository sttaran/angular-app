/// <reference types = "cypress" />

import EditUserRow from "./EditUserRow";

export default class UserRow {
  _container = 'tbody tr'

  constructor(id) {
    this._userId = id
  }

  get row (){
    // return cy.get(this._container).find("td").not('.ng2-smart-actions').eq(0).filter(`:contains("${this._userId}")`).parent()
    return cy.get(this._container).find("td").not('.ng2-smart-actions').filter(`:contains("${this._userId}")`).parent()
  }

  get editButton(){
    return this.row.find('.ng2-smart-action-edit-edit')
  }

  clickEditButton(){
    this.editButton.click()
    return new EditUserRow(true)
  }

  get id(){
    return this.row.find('td').not('.ng2-smart-actions').eq(0)
  }

  get firstName(){
    return this.row.find('td').not('.ng2-smart-actions').eq(1)
  }

  get lastName(){
    return this.row.find('td').not('.ng2-smart-actions').eq(2)
  }

  get userName(){
    return this.row.find('td').not('.ng2-smart-actions').eq(3)
  }

  get email(){
    return this.row.find('td').not('.ng2-smart-actions').eq(4)
  }

  get age(){
    return this.row.find('td').not('.ng2-smart-actions').eq(5)
  }
}
