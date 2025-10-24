
# Preconditions:
# - The Employee need to Open Cash Register

Feature: Cashier on break

@PrioriPOS_User1 @PrioriPOS_CLOSE
Scenario: The cashier is taking a break 
  Given The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  When On the Form "MainMenu" I click on the Button "CashierBreak"
  Then On the Form "MainMenu" The Buttons "Transaction|CashierDeclaration|ChangeWorkShift|CloseCashRegister" are Disabled
  And On the Form "MainMenu" The Button "CashierBreak" is Named "המשך"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  Then On the Form "MainMenu" The Buttons "Transaction|CashierDeclaration|ChangeWorkShift|CloseCashRegister" are Enabled
  And On the Form "MainMenu" The Button "CashierBreak" is Named "הפסקה"

@PrioriPOS_User1 @PrioriPOS_CLOSE              
Scenario: Non-Passing Test -> EndBreak With Wrong Login
  Given The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  When On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "Wrong" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed

@PrioriPOS_User1 @PrioriPOS_CLOSE   
Scenario: Non-Passing Test -> EndBreak With Wrong Password
  Given The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  When On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "Wrong" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
  
@PrioriPOS_User1 @PrioriPOS_CLOSE     
Scenario: Non-Passing Test -> EndBreak With Wrong Login and Wrong Password
  Given The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  When On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "Wrong1" into the "Login" Field
  And On the Form "Login" I enter "Wrong2" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
        
Scenario: Non-Passing Test -> EndBreak With Only Login
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
  #Exit Application
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds
      
Scenario: Non-Passing Test -> EndBreak With Only PassWord
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
  # Exit Application
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds
        
Scenario: Non-passing Test -> EndBreak With No Login and No Password
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed 
  And On the Form "Login" I enter "0987" into the "Login" Field
  And On the Form "Login" I enter "0987" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "PleaseTypeLoginAndMdp" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I click on the Button "Cancel"
  # Exit Application
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds
  
  #potential bug detected
  Scenario: Non-Passing Test -> EndBreak with Another login and Password
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  # Select Option Cashier Break to start Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  # Select Option Cashier Break and Login To Stop Break Time
  And On the Form "MainMenu" I click on the Button "CashierBreak"
  And The Form "Login" is Displayed 
  And On the Form "Login" I enter "0987" into the "Login" Field
  And On the Form "Login" I enter "0987" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "OnlySameUserCanEndBreak" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  Then The Form "MainMenu" is Displayed
  #Exit Application
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds  