Feature: Sanity Tests

@PrioriPOS_User1 @PrioriPOS_CLOSE
Scenario: Check Buttons State after Login_New
  Given The Form "MainMenu" is Displayed
  # Check Enabled and Disabled Buttons
  Then On the Form "MainMenu" The Buttons "SystemMaintenance|ChangeCurrentCashier|EndDayReports|AttendanceReports|OpenCashRegister" are Enabled
  Then On the Form "MainMenu" The Buttons "Transaction|CashierBreak|CashierDeclaration|ChangeWorkShift|CloseCashRegister" are Disabled

@PrioriPOS_User1 @PrioriPOS_CLOSE  
Scenario: UI navigation test: Closed Cash Register
  Given The Form "MainMenu" is Displayed
  # Test SystemMaintenance Button
  When On the Form "MainMenu" I click on the Button "SystemMaintenance"
  And The Form "SystemMaintenance" is Displayed
  Then On the Form "SystemMaintenance", the Label "Title" is correctly Displayed
  And On the Form "SystemMaintenance" I click on the Button "Exit"
  And The Form "MainMenu" is Displayed
  # Test ChangeCurrentCashier Button
  And On the Form "MainMenu" I click on the Button "ChangeCurrentCashier"
  And The Form "Login" is Displayed
  And The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I click on the Button "Cancel"
  And The Form "MainMenu" is Displayed
  # Test EndDayReports Button
  And On the Form "MainMenu" I click on the Button "EndDayReports"
  And The Form "EndDayReports" is Displayed
  Then On the Form "EndDayReports", the Label "Title" is correctly Displayed
  And On the Form "EndDayReports" I click on the Button "Exit"
  And The Form "MainMenu" is Displayed
  # Test EndDayReports Button
  And On the Form "MainMenu" I click on the Button "AttendanceReports"
  And The Form "TimeReportMenu" is Displayed
  Then On the Form "TimeReportMenu", the Label "Title" is correctly Displayed
  And On the Form "TimeReportMenu" I click on the Button "ExitScreen"
  And The Form "MainMenu" is Displayed
  # Test OpenCashRegister Button
  And On the Form "MainMenu" I click on the Button "OpenCashRegister"
  And The Form "CashierDeclaration" is Displayed
  Then On the Form "CashierDeclaration", the Label "Title" is correctly Displayed
  And On the Form "CashierDeclaration" I click on the Button "Cancel"