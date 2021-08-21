class loginPage{
    
    userNameInput(){
        return cy.get('#username')
    }
    passwordInput(){
        return cy.get('#password')
    }
    loginBtn(){
        return cy.get(':nth-child(3) > .woocommerce-button')
    }

} 
export default loginPage