Feature: Change Current Cashier

@PrioriPOS_User1 @PrioriPOS_CLOSE
Scenario: Log on application and Change current Cashier
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed
  # Log with another account
  And On the Form "Login" I enter "0987" into the "Login" Field
  And On the Form "Login" I enter "0987" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed

@PrioriPOS_User1 @PrioriPOS_CLOSE  
Scenario: Non Passing Test -> No Login and No password At Cashier Change
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed 
  And On the Form "Login" I click on the Button "OK"
  # Check Error Message
  Then The Form "GenericMessage" is Displayed
  And On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And The Form "MainMenu" is Displayed

@PrioriPOS_User1 @PrioriPOS_CLOSE    
Scenario: Non Passing Test -> Only Login At Cashier Change
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed
  And On the Form "Login" I enter "0987" into the "Login" Field 
  And On the Form "Login" I click on the Button "OK"
  # Check Error Message
  Then The Form "GenericMessage" is Displayed
  And On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And The Form "MainMenu" is Displayed

@PrioriPOS_User1 @PrioriPOS_CLOSE      
Scenario: Non Passing Test -> Only Password At Cashier Change
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed
  And On the Form "Login" I enter "0987" into the "Password" Field 
  And On the Form "Login" I click on the Button "OK"
  # Check Error Message
  Then The Form "GenericMessage" is Displayed
  And On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And The Form "MainMenu" is Displayed

@PrioriPOS_User1 @PrioriPOS_CLOSE      
Scenario Outline: Non-Passing Test -> Wrong Authentifications at Cashier Change
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed
  And On the Form "Login" I enter "<username>" into the "Login" Field
  And On the Form "Login" I enter "<password>" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  # Check Error Message
  Then The Form "GenericMessage" is Displayed
  And On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And The Form "MainMenu" is Displayed
Examples:
  | username| password |
  | 2011    | Wrong    |
  | Wrong   | 111      |
  | Wrong1  | Wrong2   |
          