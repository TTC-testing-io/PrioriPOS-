Feature: Login_At_Koupa

Scenario Outline: Login test with different users
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "<username>" into the "Login" Field
  And On the Form "Login" I enter "<password>" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed  
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "3" Seconds
Examples:
  | username| password |
  | 2011    | 111      |
  | 0987    | 0987     |
  
Scenario: Non-passing Test -> No Login and No Password
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And I Wait "3" Seconds
     
Scenario: Non-Passing Test -> Only Login
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And I Wait "3" Seconds
  
Scenario: Non-Passing Test -> Only Password
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And I Wait "3" Seconds
  
Scenario Outline: Non-Passing Test -> Wrong Authentifications
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "90" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "<username>" into the "Login" Field
  And On the Form "Login" I enter "<password>" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  And I Wait "3" Seconds
Examples:
  | username| password |
  | 2011    | Wrong    |
  | Wrong   | 111      |
  | Wrong1  | Wrong2   |
  