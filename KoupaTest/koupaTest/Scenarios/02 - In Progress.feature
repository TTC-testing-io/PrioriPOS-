Feature: In Progress
  Scenario: Non-passing Test -> The employee has Already Checked-In
  Given I have launched the application "PrioriPOSGUI" and it completed loading in no more than "60" seconds
  When The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleLogin" is correctly Displayed
  And On the Form "Login" I enter "2011" into the "Login" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "MainMenu" is Displayed
  And On the Form "MainMenu" I click on the Button "AttendanceReports"
  And The Form "TimeReportMenu" is Displayed
  Then On the Form "TimeReportMenu", the Label "Title" is correctly Displayed 
  And On the Form "TimeReportMenu" I click on the Button "Enter" 
  And The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleAttendance" is correctly Displayed  
  And On the Form "Login" I enter "2011" into the "EmployeeLogin" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "TimeReportMenu" is Displayed
  And On the Form "TimeReportMenu" I click on the Button "ExitScreen"
  And The Form "MainMenu" is Displayed
  And On the Form "MainMenu" I click on the Button "AttendanceReports"
  And The Form "TimeReportMenu" is Displayed
  Then On the Form "TimeReportMenu", the Label "Title" is correctly Displayed 
  And On the Form "TimeReportMenu" I click on the Button "Enter" 
  And The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleAttendance" is correctly Displayed  
  And On the Form "Login" I enter "2011" into the "EmployeeLogin" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "AlreadyCheckedIn" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "Cancel"   
  And On the Form "MainMenu" I click on the Button "Exit"
  And The Form "GenericMessage" is Displayed
  Then On the Form "GenericMessage", the Label "ConfirmExitApplication" is correctly Displayed
  And On the Form "GenericMessage" I click on the Button "OK"
  And I Wait "5" Seconds