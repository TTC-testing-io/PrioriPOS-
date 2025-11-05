
// *** Includes************************************* 
//USEUNIT KeyActions
//USEUNIT MetaActions
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
// *************************************************

function OpenCashRegister() {
  
let StrAccount = "User1"; 

 Library.CloseProcessIfExists("PrioriPOSGUI"); 
 KeyActions.LaunchApp("PrioriPOSGUI", 30);  
 MetaActions.PrioriPOSLogAccount(StrAccount);
 MetaActions.PrioriPOSCheckIn("User1")
 MetaActions.PrioriPOSClose();

}
 
function CloseCashRegister() {
  
 let StrAccount = "User1"; 
  
 Library.CloseProcessIfExists("PrioriPOSGUI");  
 KeyActions.LaunchApp("PrioriPOSGUI", 30);  
 MetaActions.PrioriPOSLogAccount(StrAccount);
 MetaActions.PrioriPOSCheckOut(StrAccount)
 MetaActions.PrioriPOSClose();

}
 