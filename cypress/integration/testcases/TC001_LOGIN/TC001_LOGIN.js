import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("User navigate to login page", (url) => {
       cy.visit('https://shop.demoqa.com')
       cy.get('.woocommerce-store-notice__dismiss-link').click()
       cy.get('.pull-right > :nth-child(2) > a').should("be.visible").click()
 })

 When("/^The user try to login $/",(datatable)=> {
    cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > label').should("be.visible")
    cy.get('#password').should("be.visible")
    
})
And('/^User click on Login Button$/',() => {
    cy.get(':nth-child(3) > .woocommerce-button').should("be.visible").click()
})
Then("/^An error message appear$/",(content)=>{
    cy.get('.woocommerce-error > li').should("be.visible")
})

// Given("/^User sat on login page$/",(url) => {
//     cy.url().should('eq',Cypress.config().baseUrl+"/my-account/")
// })

// When("/^User input username as {string} and password as {string} $/",(username,password)=>{
// cy.get('#username').should('be.visible').type(username)
// cy.get('#password').should('be.visible').type(password)
// }) 

// Then("/^User click on Login button $/", () =>{
// cy.get(':nth-child(3) > .woocommerce-button').click
// })


