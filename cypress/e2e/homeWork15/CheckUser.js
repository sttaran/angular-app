export default class CheckCreatedUser{
    _url = '/pages/tables/smart-table'
    _conteinerSelector = 'div[class="ng-star-inserted"]'

    openpage(){
        cy.visit(this._url)
}
    get idCheck(){
        return cy.get(this._conteinerSelector).eq(0)
    }

    get firstnameCheck(){
        return cy.get(this._conteinerSelector).eq(1)
    }

    get lastnameCheck(){
        return cy.get(this._conteinerSelector).eq(2)
    }

    get usernameCheck(){
        return cy.get(this._conteinerSelector).eq(3)
    }

    get emailCheck(){
        return cy.get(this._conteinerSelector).eq(4)
    }

    get ageCheck(){
        return cy.get(this._conteinerSelector).eq(5)
    }

}