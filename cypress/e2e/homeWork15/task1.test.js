import CreateUser from "./CreateUser"
import CheckUser from "./CheckUser"
import UpdateUser from "./UpdateUser"

  describe("smart-table",{ }, ()=>{
    const createUser = new CreateUser()
    const checkUser = new CheckUser()
    const updateUser = new UpdateUser()

    beforeEach(() =>{
      createUser.openpage()
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
      createUser.plusButton.click()
      createUser.idInput.type(userData.id)
      createUser.firstnameInput.type(userData.firstName)
      createUser.lastnameInput.type(userData.lastName)
      createUser.usernameInput.type(userData.userName)
      createUser.emailInput.type(userData.email)
      createUser.ageInput.type(userData.age)
      createUser.saveUser.click()

      checkUser.idCheck.should("have.text", userData.id)
      checkUser.firstnameCheck.should("have.text", userData.firstName)
      checkUser.lastnameCheck.should("have.text", userData.lastName)
      checkUser.usernameCheck.should("have.text", userData.userName)
      checkUser.emailCheck.should("have.text", userData.email)
      checkUser.ageCheck.should("have.text", userData.age)

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
      updateUser.updateButton.click()
      createUser.idInput.clear().type(userData.id)
      createUser.firstnameInput.clear().type(userData.firstName)
      createUser.lastnameInput.clear().type(userData.lastName)
      createUser.usernameInput.clear().type(userData.userName)
      createUser.emailInput.clear().type(userData.email)
      createUser.ageInput.clear().type(userData.age)
      createUser.saveUser.click()

      checkUser.idCheck.should("have.text", userData.id)
      checkUser.firstnameCheck.should("have.text", userData.firstName)
      checkUser.lastnameCheck.should("have.text", userData.lastName)
      checkUser.usernameCheck.should("have.text", userData.userName)
      checkUser.emailCheck.should("have.text", userData.email)
      checkUser.ageCheck.should("have.text", userData.age)
    })
  })

































