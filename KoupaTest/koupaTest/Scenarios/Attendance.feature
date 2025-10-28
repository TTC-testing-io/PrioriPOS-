Feature: Attendance

# Functional Gherkin

@PrioriPOS_CLOSE
Scenario: The Employee is Checking-In (Functional Wording)
  Given I have launched the PrioriPOS application
  When  I m logged as "User1"
  And I start a cashier session as "User1"
  Then The Form "MainMenu" is Displayed

@PrioriPOS_CLOSE
Scenario: The Employee is Checking-Out (Functional Wording)
  Given I have launched the PrioriPOS application
  When  I m logged as "User1"
  And I end a cashier session as "User1"
  Then The Form "MainMenu" is Displayed
 
#TO DO :
# - Non-passing Test -> The employee has Already Checked-In -> Need more explanations
# - Non-passing Test -> The employee has Already Checked-Out -> Need more explanations