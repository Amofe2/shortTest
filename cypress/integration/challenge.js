///<reference types = "cypress"/>

describe("SENTRYC Login", () => {
    it("LOGIN", () => {
        cy.visit("/");
        
        cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
   
        cy.contains('Hello!')
            .should('be.visible')
        
        cy.contains('Welcome to the Sentryc.')
            .should('be.visible')
        
        cy.get('input[name=email]')
            .type('KAY@gmail.com')
            .should('be.visible')
            .should('have.attr', 'required')
            
      
        cy.get('input[name=password]')
        .type('C0mputer!')
            .should('be.visible')
            .should('have.attr', 'required')
        
            cy.get('button[type=submit]')
            .should('be.visible')
            .should('not.be.disabled')
            .click()
    
            cy.contains('Error!').should('be.visible')
            cy.contains('Error 401').should('be.visible')
      cy.wait(3000);

      cy.contains('The password field is required')
      cy.get('input[name=email]')
      .should('have.value', 'KAY@gmail.com')

      cy.get('input[name=password]')
            .should('be.empty')
      
      

      cy.log("******* Good*****");
      // if (cy.contains("Do you want to login here and logout")) {
      //   cy.get("#forceLogin").should("be.visible").click();
      //   // cy.wait(5000);
      //   cy.log("******* Good*****");
      // }
    });
  
    
  });

  describe("FORGOT PASSWORD", () => {
    it("RESET PASSWORD", () => {
        cy.visit("/");
        
        cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
   
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
        
        cy.get('input[name=email]')
            .type('KAY@gmail.com')
            .should('be.visible')
            .should('have.attr', 'required')
      
        cy.get('button[type=submit]')
            .should('be.visible')
            .should('not.be.disabled')
            .click()
        
        cy.contains('Back to login')
            .should('be.visible')
            .should('not.be.disabled')
            .click()
        
            cy.url()
            .should('eq', 'https://login.sentryc.com/auth/login')
      cy.log("******* Good*****");
     
    });
  
    
  });

  describe("SENTRYC TERMS AND CONDITIONS", () => {
    it("SENTRYC TERMS", () => {
        cy.visit("/");
        
        cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
   
        cy.contains('Terms')
            .should('be.visible')
            .should('have.attr', 'href')
           
        
        cy.contains('Terms')
            .click()
        
        cy.url()
            .should('eq', 'https://login.sentryc.com/terms')
        
        cy.contains('Terms')
            .should('not.be.hidden')
        
      
      cy.log("******* Good*****");
     
    });
  
    it("SENTRYC CONDITIONS", () => {
        cy.visit("/");
        
        cy.url()
        .should('eq', 'https://login.sentryc.com/auth/login/')
   
        cy.contains('Conditions')
            .should('be.visible')
            .should('have.attr', 'href')
           
        
        cy.contains('Conditions')
            .click()
        
        cy.url()
            .should('eq', 'https://login.sentryc.com/conditions')
        
        cy.contains('Conditions')
            .should('not.be.hidden')
        
      
      cy.log("******* Good*****");
     
    });
  });