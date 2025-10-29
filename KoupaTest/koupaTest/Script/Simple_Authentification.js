
// *** Includes************************************* 
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
// *************************************************
    
function Autentification_User_Password(){
  
 KeyActions.LaunchApp("PrioriPOSGUI", 20);  
 MetaActions.LogOnPrioriPOS("2011", "111")
 MetaActions.PrioriPOSClose();
   
}

function Autentification_Account(){
  
 KeyActions.LaunchApp("PrioriPOSGUI", 20);  
 MetaActions.PrioriPOSLogAccount("User1");
 MetaActions.PrioriPOSClose();
   
}