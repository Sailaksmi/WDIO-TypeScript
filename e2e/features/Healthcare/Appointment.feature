Feature: Healthcare Appointment Booking

  Scenario Outline: Book healthcare appointment successfully
    Given user is on healthcare login page
    When user logs in with "<username>" and "<password>"
    And user books appointment with "<visitDate>" and "<comment>"
    Then appointment should be confirmed

    Examples:
      | username | password             | visitDate  | comment           |
      | John Doe | ThisIsNotAPassword   | 20/12/2025 | General Checkup   |
      | John Doe | ThisIsNotAPassword   | 25/12/2025 | Dental Consultation |
