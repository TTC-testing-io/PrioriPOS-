
// *** Includes**************************************** 
//USEUNIT ControlOperations
//USEUNIT WorkFlowOperations
var ControlOperations = require("ControlOperations");
var WorkFlowOperations = require("WorkFlowOperations");
// ****************************************************

// @FunctionCheckIn @Programmative_FunctionCheckInAndOut    
function CheckIn() {
  
 let StrAccount="User1";
 
 Library.CloseProcessIfExists("PrioriPOSGUI");
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 WorkFlowOperations.PrioriPOSCheckIn(StrAccount)
 WorkFlowOperations.PrioriPOSClose();

}

// @FunctionCheckOut @Programmative_FunctionCheckInAndOut    
function CheckOut() {
  
 let StrAccount="User1";
 
 Library.CloseProcessIfExists("PrioriPOSGUI");  
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 WorkFlowOperations.PrioriPOSCheckOut(StrAccount)
 WorkFlowOperations.PrioriPOSClose();

}
 