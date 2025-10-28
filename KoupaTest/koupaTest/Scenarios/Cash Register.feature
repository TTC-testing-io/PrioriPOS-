Feature: Cash Register

# Functional Gherkin
@PrioriPOS_CLOSE
Scenario: Open Cash Register (Functional Wording)
  Given I have launched the PrioriPOS application
  When I m logged as "User1"
  And I open the cash register
  Then The cash register is open and the interface buttons are updated accordingly

@PrioriPOS_CLOSE
Scenario: Close Cash Register (Functional Wording)
  Given I have launched the PrioriPOS application
  When I m logged as "User1"
  And I close the cash register
  Then The cash register is closed and the interface buttons are updated accordingly
  