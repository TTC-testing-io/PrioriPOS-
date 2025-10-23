Feature: Attendance

@PrioriPOS_User1 @PrioriPOS_CLOSE
Scenario: The Employee is Checking-In
  Given The Form "MainMenu" is Displayed 
  # Open Time Report Menu    
  When On the Form "MainMenu" I click on the Button "AttendanceReports"
  And The Form "TimeReportMenu" is Displayed
  Then On the Form "TimeReportMenu", the Label "Title" is correctly Displayed
  # Select Check-in option and Log-in
  And On the Form "TimeReportMenu" I click on the Button "Enter" 
  And The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleAttendance" is correctly Displayed  
  And On the Form "Login" I enter "2011" into the "EmployeeLogin" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "TimeReportMenu" is Displayed
  And On the Form "TimeReportMenu" I click on the Button "ExitScreen"
  And The Form "MainMenu" is Displayed
  
@PrioriPOS_User1 @PrioriPOS_CLOSE
Scenario: The Employee is Checking-Out
  Given The Form "MainMenu" is Displayed 
   # Open Time Report Menu    
  When On the Form "MainMenu" I click on the Button "AttendanceReports"
  And The Form "TimeReportMenu" is Displayed
  Then On the Form "TimeReportMenu", the Label "Title" is correctly Displayed
  # Select Check-Out option and Log-Out 
  And On the Form "TimeReportMenu" I click on the Button "Exit" 
  And The Form "Login" is Displayed
  Then On the Form "Login", the Label "TitleAttendance" is correctly Displayed  
  And On the Form "Login" I enter "2011" into the "EmployeeLogin" Field
  And On the Form "Login" I enter "111" into the "Password" Field
  And On the Form "Login" I click on the Button "OK"
  And The Form "TimeReportMenu" is Displayed
  And On the Form "TimeReportMenu" I click on the Button "ExitScreen"
  And The Form "MainMenu" is Displayed
  
#TO DO :
# - Non-passing Test -> The employee has Already Checked-In -> Need more explanations
# - Non-passing Test -> The employee has Already Checked-Out -> Need more explanations