@F_1234
Feature: This feature would be used to design the login page

  Background: Open the application
    Given I have opened the application in browser

  @Sanity
  Scenario: Validate the successful login
    When I click on the login link
    And I enter a username
    And I enter a password
    And I click on the login button
    Then I should have landed on the home page

  @Regression
  Scenario: Validate the successful login using test data
    When I click on the login link
    And I enter a username "abc@xyz.com"
    And I enter a password "Pqr@123"
    And I click on the login button
    Then I should have landed on the home page

  @Regression @Rapid
  Scenario Outline: Validate the successful login using mulitple test data
    When I click on the login link
    And I enter a username "<UserName>"
    And I enter a password "<Password>"
    And I click on the login button
    Then I should have landed on the home page

    Examples: 
      | UserName      | Password |
      | abc@xyz.com   | Prq@1234 |
      | hello@abc.com | Abc$432! |

	@Regression @Rapid
  Scenario: Validate the negative login using test data
    When I click on the login link
    And I enter a username "abc@xyz.com"
    And I enter a password "Pqr@1234!"
    And I click on the login button
    Then I should get the error message as "The email or password you have entered is invalid."
