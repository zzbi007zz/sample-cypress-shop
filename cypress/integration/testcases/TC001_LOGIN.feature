     Feature:Login page
     Background: User navigate to login page

     Scenario: Login page without enter username password
        Given User navigate to login page
        When The user try to login 
        And  User click on Login Button
        Then An error message appear

   #   Scenario Outline: Scenario Outline name: Login page with valid user name password successful
   #   Given User sat on login page
   #   When User input username as '<username>' password as '<password>'
   #   Then User click on Login button 
   #         Examples:
   #          | username | password       |
   #          | tester123| Passwrd@123456 |