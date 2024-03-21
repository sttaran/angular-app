/// <reference types = "cypress" />

import EditUserRow from "./components/EditUserRow";
import UserRow from "./components/UserRow";

export default class SmartTablePage {
   _url = "/pages/tables/smart-table"

  visit(){
     cy.visit(this._url)
  }

  get addUserButton(){
     return cy.get('.ng2-smart-action-add-add')
  }

  clickNewUserButton(){
     this.addUserButton.click()
     return new EditUserRow()
  }

  findRowByUserId(id){
    return new UserRow(id)
  }
}
