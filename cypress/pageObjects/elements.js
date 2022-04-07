class pageObjects{

    elements = {
        usernameInput : () => cy.get('input[name=email]'),
        passwordInput : () => cy.get('input[name=password]'),
        loginButton : () =>   cy.get('button[type=submit]'),
        error1 : () =>      cy.contains('Error!').should('be.visible'),
        error404 : () =>    cy.contains('Error 401').should('be.visible')
    }

    typeUserName(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password).should('be.visible')
        .should('have.attr', 'required')
    }

    clickLogin(){
        this.elements.loginButton().click()
    }

}

module.exports = new pageObjects();
