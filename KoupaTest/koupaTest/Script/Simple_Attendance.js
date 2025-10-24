


var KeyActions = require("KeyActions");

var MetaActions = require("MetaActions");
 
function CheckIn(user, password) {
  
  KeyActions.ClickButton("PrioriPOSGUI", "TimeReportMenu", "Enter");
  MetaActions.LogOnPrioriPOS(user, password);

}
 
function CheckOut(user, password) {

  KeyActions.LaunchApp("PrioriPOSGUI", 20);
  MetaActions.LogOnPrioriPOS(user, password);
  KeyActions.ClickButton("PrioriPOSGUI", "TimeReportMenu", "Exit");
  MetaActions.LogOnPrioriPOS(user, password);

}
 
function CheckIn_Test() {
  
  KeyActions.LaunchApp("PrioriPOSGUI", 20);
  CheckIn("2011", "111");

}
 
function CheckOut_Test() {
  
  KeyActions.LaunchApp("PrioriPOSGUI", 20);
  CheckOut("2011", "111");

}
 