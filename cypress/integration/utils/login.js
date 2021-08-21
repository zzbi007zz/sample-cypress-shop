import loginPage from '../pages/loginPage.js'

const login = new loginPage()

Cypress.Commands.add('login',(data)=>{
    cy.visit('/')
    login.userNameInput().type(data.username)
    login.passwordInput().type(data.password)
})