export default class UpdateUser{
    _url = '/pages/tables/smart-table'

    openpage(){
        cy.visit(this._url)
}
    get updateButton(){
        return cy.get('i.nb-edit').eq(0)
    }
}