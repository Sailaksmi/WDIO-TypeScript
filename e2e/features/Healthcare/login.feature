Feature: OpenMRS Login

Scenario Outline: Login to OpenMRS and verify home page title
  Given I am on OpenMRS login page
  When I enter username "<username>"
  And I click on Continue button
  And I enter password "<password>"
  And I click on Login button
  # And I select location "<location>"
  Then user verify page title is displayed as "<expectedTitle>"
  

Examples:
  | username | password | location           | expectedTitle |
  | admin    | Admin123 | Outpatient Clinic  | Service queues       |
