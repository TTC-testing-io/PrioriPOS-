
// *** Includes************************************* 
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
// *************************************************

  
function CheckIn() {
  
 KeyActions.LaunchApp("PrioriPOSGUI", 20);  
 MetaActions.PrioriPOSLogAccount("User1");
 MetaActions.PrioriPOSCheckIn("User1")
 MetaActions.PrioriPOSClose();

}
 
function CheckOut() {
  
 KeyActions.LaunchApp("PrioriPOSGUI", 20);  
 MetaActions.PrioriPOSLogAccount("User1");
 MetaActions.PrioriPOSCheckOut("User1")
 MetaActions.PrioriPOSClose();

}
 