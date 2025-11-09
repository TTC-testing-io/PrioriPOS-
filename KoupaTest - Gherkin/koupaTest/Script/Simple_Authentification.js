
// *** Includes************************************* 
//USEUNIT KeyActions
//USEUNIT MetaActions
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
// *************************************************


// @FunctionLoginTest1    
function Autentification_User_Password(){

let StrUser="2011";
let StrPassword="111"
 
 Library.CloseProcessIfExists("PrioriPOSGUI"); 
 KeyActions.LaunchApp("PrioriPOSGUI", 30);  
 MetaActions.LogOnPrioriPOS(StrUser, StrPassword)
 MetaActions.PrioriPOSClose();
    
}

// @FunctionLoginTest2  
function Autentification_Account(){
  
 let StrAccount="User1";
 
 Library.CloseProcessIfExists("PrioriPOSGUI");  
 KeyActions.LaunchApp("PrioriPOSGUI", 30);  
 MetaActions.PrioriPOSLogAccount(StrAccount);
 MetaActions.PrioriPOSClose();
   
}