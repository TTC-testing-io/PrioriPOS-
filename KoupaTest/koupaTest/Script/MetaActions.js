var ObjectRepository = require("ObjectRepository");

// *** Includes************************************* 
var KeyActions = require("KeyActions");
var Library = require("Library");
// *************************************************

// _______________________________________________________________________________________________________________________________________________________________  

function LogOnPrioriPOS(Login, Password){
  
   KeyActions.FormIsDisplayed("PrioriPOSGUI","Login");

   KeyActions.SetField("PrioriPOSGUI", "Login", "Login", Login);
   KeyActions.SetField("PrioriPOSGUI", "Login", "Password", Password);
   KeyActions.ClickButton("PrioriPOSGUI", "Login", "OK");

}
// _______________________________________________________________________________________________________________________________________________________________  

function ClosePrioriPOS(Login, Password){
      
    KeyActions.FormIsDisplayed("PrioriPOSGUI", "MainMenu");
    KeyActions.ClickButton("PrioriPOSGUI", "MainMenu", "Exit");
    KeyActions.FormIsDisplayed("", "GenericMessage");
    KeyActions.CheckLabel("PrioriPOSGUI", "GenericMessage", "StaticLabel", "ConfirmExitApplication", "");
    KeyActions.ClickButton("PrioriPOSGUI", "GenericMessage", "OK");
    KeyActions.Wait(3);
}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSLogAccount(AccountName){

 let StrAccount;
 let TabValue;
 let Login;
 let Password;

   StrAccount = ObjectRepository.GetAccount("PrioriPOSGUI", AccountName);
   TabValue = StrAccount.split(StrAccount,":");
  
   Login = TabValue[0];
   Password = TabValue[1];
  
   KeyActions.FormIsDisplayed("PrioriPOSGUI","Login");
   KeyActions.CheckLabel("PrioriPOSGUI", "Login", "StaticLabel", ObjectName, "");
   KeyActions.SetField("PrioriPOSGUI", "Login", "Login", Login);
   KeyActions.SetField("PrioriPOSGUI", "Login", "Password", Password);
   KeyActions.ClickButton("PrioriPOSGUI", "Login", "OK");

}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCheckIn(AccountName){
  


}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCheckOut(AccountName){
  


}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSOpenCashRegister(AccountName){
  


}
// _______________________________________________________________________________________________________________________________________________________________  

function PrioriPOSCloseCashRegister(AccountName){
  


}
// _______________________________________________________________________________________________________________________________________________________________  

// *** Exports*********************************************************** 
module.exports.LogOnPrioriPOS = LogOnPrioriPOS;

module.exports.PrioriPOSLogAccount = PrioriPOSLogAccount;
module.exports.PrioriPOSCheckIn = PrioriPOSCheckIn;
module.exports.PrioriPOSCheckOut = PrioriPOSCheckOut;
module.exports.PrioriPOSOpenCashRegister = PrioriPOSOpenCashRegister;
module.exports.PrioriPOSCloseCashRegister = PrioriPOSCloseCashRegister;
// ********************************************************************** 