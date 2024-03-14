export default class CreateUser{
    _url = '/pages/tables/smart-table'
    _conteinerSelector = 'input-editor.ng-star-inserted'

    openpage(){
        cy.visit(this._url)
}
    get plusButton(){
        return cy.get('i[class="nb-plus"]')
    }

    get idInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="id"]')
    }

    get firstnameInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="firstName"]')
    }

    get lastnameInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="lastName"]')
    }

    get usernameInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="username"]')
    }

    get emailInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="email"]')
    }

    get ageInput(){
        return cy.get(this._conteinerSelector).find('input[ng-reflect-name="age"]')
    }

    get saveUser(){
        return cy.get('i.nb-checkmark')
    }


}