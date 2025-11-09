Feature: Open and Close PrioriPos

Scenario: Simple Login with User1
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed 
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
    
Scenario: Simple Login with User2
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed 
  And On the Form "Login" I enter "0987" into the "Login" Field
  And On the Form "Login" I enter "0987" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
  
Scenario: Close Application
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds