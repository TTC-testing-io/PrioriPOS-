Feature: Cash Register

@PrioriPOS_User1
Scenario: Open Cash Register 
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "OpenCashRegister"
  And The Form "CashierDeclaration" is Displayed
  Then On the Form "CashierDeclaration", the Label "Title" is correctly Displayed
  And On the Form "CashierDeclaration" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  And On the Form "GenericMessage", the Label "ErrorAtPrinting" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  Then On the Form "MainMenu" The Buttons "Transaction|CashierBreak|CashierDeclaration|ChangeWorkShift|CloseCashRegister" are Enabled
  
@PrioriPOS_User1
Scenario: Close Cash Register 
  Given The Form "MainMenu" is Displayed
  When On the Form "MainMenu" I click on the Button "CloseCashRegister"
  And The Form "CloseCashRegister" is Displayed
  Then On the Form "CloseCashRegister", the Label "Title" is correctly Displayed
  And On the Form "CloseCashRegister" I click on the Button "ConfirmReport"
  And I Wait "5" Seconds
  And On the Form "CloseCashRegister" I click on the Button "Ok"
  Then On the Form "MainMenu" The Buttons "Transaction|CashierBreak|CashierDeclaration|ChangeWorkShift|CloseCashRegister" are Enabled