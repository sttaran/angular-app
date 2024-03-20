import SmartTable from "../../support/SmartTable"


  describe("smart-table",{ }, ()=>{
    const smartTable = new SmartTable()
   

    beforeEach(() =>{
      smartTable.openpage()
    })

    it('create and check user', () =>{
      const userData = {
        id : '777',
        firstName : 'Semen',
        lastName : 'Kovach',
        userName : 'KovachS',
        email : 'testemail@ii.io',
        age : '33'
      }
      smartTable.plusButton.click()
      smartTable.idInput.type(userData.id)
      smartTable.firstnameInput.type(userData.firstName)
      smartTable.lastnameInput.type(userData.lastName)
      smartTable.usernameInput.type(userData.userName)
      smartTable.emailInput.type(userData.email)
      smartTable.ageInput.type(userData.age)
      smartTable.saveUser.click()

      smartTable.idCheck.should("have.text", userData.id)
      smartTable.firstnameCheck.should("have.text", userData.firstName)
      smartTable.lastnameCheck.should("have.text", userData.lastName)
      smartTable.usernameCheck.should("have.text", userData.userName)
      smartTable.emailCheck.should("have.text", userData.email)
      smartTable.ageCheck.should("have.text", userData.age)

    })

    it('update and check user', () =>{
      const userData = {
        id : '888',
        firstName : 'Roma',
        lastName : 'Romanovich',
        userName : 'RomaR',
        email : 'rpmaemail@ii.io',
        age : '22'
      }
      smartTable.updateButton.click()
      smartTable.idInput.clear().type(userData.id)
      smartTable.firstnameInput.clear().type(userData.firstName)
      smartTable.lastnameInput.clear().type(userData.lastName)
      smartTable.usernameInput.clear().type(userData.userName)
      smartTable.emailInput.clear().type(userData.email)
      smartTable.ageInput.clear().type(userData.age)
      smartTable.saveUser.click()

      smartTable.idCheck.should("have.text", userData.id)
      smartTable.firstnameCheck.should("have.text", userData.firstName)
      smartTable.lastnameCheck.should("have.text", userData.lastName)
      smartTable.usernameCheck.should("have.text", userData.userName)
      smartTable.emailCheck.should("have.text", userData.email)
      smartTable.ageCheck.should("have.text", userData.age)
    })
  })

































