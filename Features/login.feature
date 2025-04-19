Feature: Login into the application

Scenario: Successful login with valid credentials
    Given I logged into the application with valid credentials
    When I navigate to the dashboard
    Then I should see the dashboard page items