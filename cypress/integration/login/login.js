import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
const pageInject = require('../../pageObjects/elements')


Given('A user opens the login page', ()=>{
    cy.visit('/')
    cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
})

When ('A user enter the username {string}', (username)=>{
    cy.get('input[name=email]')
            .type(username)
            .should('be.visible')
            .should('have.attr', 'required')
})

And('A user enter the password {string}', (password) =>{
    cy.get('input[name=password]')
        .type(password)
            .should('be.visible')
            .should('have.attr', 'required')
        })
And('A user clicks on the login button', ()=>{
    cy.get('button[type=submit]')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

})

Then ('A user will not be logged in', ()=>{
    cy.contains('Error!').should('be.visible')
    cy.contains('Error 401').should('be.visible')

cy.contains('The password field is required')
cy.get('input[name=email]')
.should('have.value', 'KAY@gmail.com')

cy.get('input[name=password]')
    .should('be.empty')
})



Given('A user opens the login page', ()=>{
    cy.visit('/')
    cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
})

When ('A user clicks on forgot password', ()=>{
    cy.contains('Forgot password?')
            .should('be.visible')
            .should('have.attr', 'href')
        
        cy.contains('Forgot password?')
            .click()

        cy.url()
            .should('eq', 'https://login.sentryc.com/auth/forgot-password')
        
        cy.contains('Forgot password')
            .should('be.visible')
        
        cy.contains('Enter your email to restore')
            .should('be.visible')
})

And ('A user enter the username {string}', (username)=>{
    cy.get('input[name=email]')
            .type(username)
            .should('be.visible')
            .should('have.attr', 'required')
        })

And('A user clicks on the reset button', ()=>{
     cy.get('button[type=submit]')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

})


And('A user clicks on the back to login button', ()=>{
    cy.contains('Back to login')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

})

Then ('A user will be redirected to the login page', ()=>{
    cy.url()
    .should('eq', 'https://login.sentryc.com/auth/login')
})



Given('A user opens the login page', ()=>{
    cy.visit('/')
    cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
})

When ('A user clicks on Terms', ()=>{
    cy.contains('Terms')
    .should('be.visible')
    .should('have.attr', 'href')
   

cy.contains('Terms')
    .click()
})

Then ('A user will be redirected to the Sentryc Terms page', ()=>{
    cy.url()
    .should('eq', 'https://login.sentryc.com/terms')

cy.contains('Terms')
    .should('not.be.hidden')
})



Given('A user opens the login page', ()=>{
    cy.visit('/')
    cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
})

When ('A user clicks on Conditions', ()=>{
    cy.contains('Conditions')
    .should('be.visible')
    .should('have.attr', 'href')
   

cy.contains('Conditions')
    .click()
   
})

Then ('A user will be redirected to the Sentryc Conditions page', ()=>{
        
        cy.url()
            .should('eq', 'https://login.sentryc.com/conditions')
        
        cy.contains('Conditions')
            .should('not.be.hidden')
})