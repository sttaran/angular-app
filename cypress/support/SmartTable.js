export default class SmartTable{
    _url = '/pages/tables/smart-table'
    _conteinerSelectorCreate = 'input-editor.ng-star-inserted'
    _conteinerSelectorCheck = 'div[class="ng-star-inserted"]'

    openpage(){
        cy.visit(this._url)
}
    get plusButton(){
        return cy.get('i[class="nb-plus"]')
    }

    get idInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="id"]')
    }

    get firstnameInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="firstName"]')
    }

    get lastnameInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="lastName"]')
    }

    get usernameInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="username"]')
    }

    get emailInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="email"]')
    }

    get ageInput(){
        return cy.get(this._conteinerSelectorCreate).find('input[ng-reflect-name="age"]')
    }

    get saveUser(){
        return cy.get('i.nb-checkmark')
    }
    get idCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(0)
    }

    get firstnameCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(1)
    }

    get lastnameCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(2)
    }

    get usernameCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(3)
    }

    get emailCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(4)
    }

    get ageCheck(){
        return cy.get(this._conteinerSelectorCheck).eq(5)
    }
    get updateButton(){
        return cy.get('i.nb-edit').eq(0)
    }
}