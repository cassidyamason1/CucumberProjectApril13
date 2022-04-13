$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F_1234"
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_1234"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_have_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_1234"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"Pqr@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_have_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the successful login using mulitple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter a password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Prq@1234"
      ]
    },
    {
      "cells": [
        "hello@abc.com",
        "Abc$432!"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using mulitple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_1234"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"Prq@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_have_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using mulitple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_1234"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a username \"hello@abc.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"Abc$432!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_have_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the negative login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_1234"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"Pqr@1234!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});