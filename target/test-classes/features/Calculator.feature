Feature: This feature would be creating a calculator for Add and Subtract

  Scenario: To Add two numbers
    Given I have a calculator
    When I add 4 and 5
    Then I should get the result as 9

  Scenario: To Sub two numbers
    Given I have a calculator
    When I sub 6 and 3
    Then I should get the result as 3

  Scenario Outline: To add multiple numbers
    Given I have a calculator
    When I add <num1> and <num2>
    Then I should get the result as <result>

    Examples: 
      | num1 | num2 | result |
      |    6 |    7 |     13 |
      |  100 |   32 |    132 |

  Scenario: Add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers
      | 4 |
      | 5 |
      | 7 |
      | 8 |
    Then I should get the result as 24

  Scenario: Add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers using List
      |  4 |
      |  5 |
      |  7 |
      |  8 |
      | 10 |
    Then I should get the result as 34

  Scenario: To calculate the total bill of the order
    Given I have a calculator
    When I order the below items
      | coffee |  4 |
      | tea    |  5 |
      | burger | 15 |
    Then I should get the result as 24

  Scenario: To calculate the total bill of the order using quantity
    Given I have a calculator
    When I order the below items using quantity
      | coffee | 1 | 10 |
      | tea    | 2 | 20 |
      | burger | 3 | 30 |
    Then I should get the result as 140
