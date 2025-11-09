// *** Includes************************************* 
//USEUNIT ControlOperations
//USEUNIT Library
var ControlOperations = require("ControlOperations");
var Library = require("Library");
// *************************************************

// _______________________________________________________________________________________________________________________________________________________________  

function LogOnPrioriPOS(Login, Password) {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Login");
    ControlOperations.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", "TitleLogin", "");
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Login", Login);
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Password", Password);
    ControlOperations.ClickButton("PrioriPOSGUI", "Login", "OK");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSClose() {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "Exit");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "GenericMessage");
    ControlOperations.CheckLabel("PrioriPOSGUI", "GenericMessage", "StaticLabel", "ConfirmExitApplication", "");
    ControlOperations.ClickButton("PrioriPOSGUI", "GenericMessage", "OK");
    ControlOperations.Wait(3);
}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSLogAccount(AccountName) {

    let StrAccount;
    let TabValue;
    let Login;
    let Password;

    StrAccount = ControlOperations.GetAccount("PrioriPOSGUI", AccountName);
    TabValue = StrAccount.split(":");

    Login = TabValue[0];
    Password = TabValue[1];

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Login");
    ControlOperations.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", "TitleLogin", "");
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Login", Login);
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Password", Password);
    ControlOperations.ClickButton("PrioriPOSGUI", "Login", "OK");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCheckIn(AccountName) {

    StrAccount = ControlOperations.GetAccount("PrioriPOSGUI", AccountName);
    TabValue = StrAccount.split(":");

    Login = TabValue[0];
    Password = TabValue[1];

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "AttendanceReports");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "TimeReportMenu");
    ControlOperations.CheckLabel("PrioriPOSGUI", "TimeReportMenu", "StaticLabel", "Title", "");
    ControlOperations.ClickButton("PrioriPOSGUI", "TimeReportMenu", "Enter");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Login");
    ControlOperations.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", "TitleAttendance", "");
    ControlOperations.SetField("PrioriPOSGUI", "Login", "EmployeeLogin", Login);
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Password", Password);
    ControlOperations.ClickButton("PrioriPOSGUI", "Login", "OK");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "TimeReportMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "TimeReportMenu", "ExitScreen");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCheckOut(AccountName) {

    StrAccount = ControlOperations.GetAccount("PrioriPOSGUI", AccountName);
    TabValue = StrAccount.split(":");

    Login = TabValue[0];
    Password = TabValue[1];

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "AttendanceReports");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "TimeReportMenu");
    ControlOperations.CheckLabel("PrioriPOSGUI", "TimeReportMenu", "StaticLabel", "Title", "");
    ControlOperations.ClickButton("PrioriPOSGUI", "TimeReportMenu", "Exit");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Login");
    ControlOperations.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", "TitleAttendance", "");
    ControlOperations.SetField("PrioriPOSGUI", "Login", "EmployeeLogin", Login);
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Password", Password);
    ControlOperations.ClickButton("PrioriPOSGUI", "Login", "OK");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "TimeReportMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "TimeReportMenu", "ExitScreen");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSOpenCashRegister() {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "OpenCashRegister");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "CashierDeclaration");
    ControlOperations.CheckLabel("PrioriPOSGUI", "CashierDeclaration", "StaticLabel", "Title", "");
    ControlOperations.ClickButton("PrioriPOSGUI", "CashierDeclaration", "OK");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "GenericMessage");
    ControlOperations.CheckLabel("PrioriPOSGUI", "GenericMessage", "StaticLabel", "ErrorAtPrinting", "");
    ControlOperations.ClickButton("PrioriPOSGUI", "GenericMessage", "OK");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCloseCashRegister() {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "CloseCashRegister");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "CloseCashRegister");
    ControlOperations.CheckLabel("PrioriPOSGUI", "CloseCashRegister", "StaticLabel", "Title", "");
    ControlOperations.ClickButtonUntilEnabledElement("PrioriPOSGUI", "CloseCashRegister", "ConfirmReport","Button", "OK", 30);
    ControlOperations.ClickButton("PrioriPOSGUI", "CloseCashRegister", "OK");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    
}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSStartBreakTime() {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "CashierBreak");
    ControlOperations.CheckButtonCaption("PrioriPOSGUI", "MainMenu", "CashierBreak", "המשך")
    //ControlOperations.ElementsAreDisabled("PrioriPOSGUI","MainMenu","Button","Transaction|CashierDeclaration|ChangeWorkShift|CloseCashRegister");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSEndBreakTime(AccountName) {

    StrAccount = ControlOperations.GetAccount("PrioriPOSGUI", AccountName);
    TabValue = StrAccount.split(":");

    Login = TabValue[0];
    Password = TabValue[1];

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "CashierBreak");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Login");
    ControlOperations.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", "TitleLogin", "");
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Login", Login);
    ControlOperations.SetField("PrioriPOSGUI", "Login", "Password", Password);
    ControlOperations.ClickButton("PrioriPOSGUI", "Login", "OK");
    ControlOperations.CheckButtonCaption("PrioriPOSGUI", "MainMenu", "CashierBreak", "הפסקה")
    //ControlOperations.ElementsAreEnabled("PrioriPOSGUI","MainMenu","Button","Transaction|CashierDeclaration|ChangeWorkShift|CloseCashRegister");  

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCashPaiement(AccountName) {

    StrAccount = ControlOperations.GetAccount("PrioriPOSGUI", AccountName);
    TabValue = StrAccount.split(":");

    SalesMan = TabValue[0];

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    ControlOperations.ClickButton("PrioriPOSGUI", "MainMenu", "Transaction");
    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "Transaction");
    ControlOperations.SetField("PrioriPOSGUI", "Transaction", "SalesMan", SalesMan);    
    ControlOperations.SetCellValue("PrioriPOSGUI", "Transaction", "TransactionItems",1 ,'מק"ט', 11);
    ControlOperations.SetCellValue("PrioriPOSGUI", "Transaction", "TransactionItems",1 ,"כ.", 3);
    ControlOperations.SetCellValue("PrioriPOSGUI", "Transaction", "TransactionItems",1 ,"מחיר", 10);
      
}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCheckErrorMessage(ErrorMessage) {

    ControlOperations.FormIsDisplayed("PrioriPOSGUI", "GenericMessage");
    ControlOperations.CheckLabel("PrioriPOSGUI", "GenericMessage", "StaticLabel", ErrorMessage, "");
    ControlOperations.ClickButton("PrioriPOSGUI", "GenericMessage", "OK");
    ControlOperations.FormIsNotDisplayed("PrioriPOSGUI", "GenericMessage");

}
// _______________________________________________________________________________________________________________________________________________________________  

// *** Exports*********************************************************** 
module.exports.PrioriPOSClose = PrioriPOSClose;
module.exports.LogOnPrioriPOS = LogOnPrioriPOS;
module.exports.PrioriPOSLogAccount = PrioriPOSLogAccount;
module.exports.PrioriPOSCheckIn = PrioriPOSCheckIn;
module.exports.PrioriPOSCheckOut = PrioriPOSCheckOut;
module.exports.PrioriPOSOpenCashRegister = PrioriPOSOpenCashRegister;
module.exports.PrioriPOSCloseCashRegister = PrioriPOSCloseCashRegister;
module.exports.PrioriPOSCheckErrorMessage = PrioriPOSCheckErrorMessage;
module.exports.PrioriPOSStartBreakTime = PrioriPOSStartBreakTime;
module.exports.PrioriPOSEndBreakTime = PrioriPOSEndBreakTime;
module.exports.PrioriPOSCashPaiement = PrioriPOSCashPaiement;
// ********************************************************************** 