Feature: Login Feature

   Feature This feature is required for a user to log in.

    Scenario: Success Login
    Given A user opens the login page
    When A user enter the username "KAY@gmail.com"
    And A user enter the password "C0nnect!"
    And A user clicks on the login button
    Then A user will not be logged in

    Scenario: Reset Password
    Given A user opens the login page
    When A user clicks on forgot password
    And A user enter the username "KAY@gmail.com"
    And A user clicks on the reset button
    And A user clicks on the back to login button
    Then A user will be redirected to the login page

    Scenario: SENTRYC TERMS
    Given A user opens the login page
    When A user clicks on Terms
    Then A user will be redirected to the Sentryc Terms page

     Scenario: SENTRYC CONDITIONS
    Given A user opens the login page
    When A user clicks on Conditions
    Then A user will be redirected to the Sentryc Conditions page