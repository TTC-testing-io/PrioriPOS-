
// *** Includes**************************************** 
//USEUNIT ControlOperations
//USEUNIT WorkFlowOperations
var ControlOperations = require("ControlOperations");
var WorkFlowOperations = require("WorkFlowOperations");
// ****************************************************

function OpenCashRegister() {
  
let StrAccount = "User1"; 

 Library.CloseProcessIfExists("PrioriPOSGUI"); 
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 WorkFlowOperations.PrioriPOSOpenCashRegister();
 WorkFlowOperations.PrioriPOSClose();

}
 
function CloseCashRegister() {
  
 let StrAccount = "User1"; 
  
 Library.CloseProcessIfExists("PrioriPOSGUI");  
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 WorkFlowOperations.PrioriPOSCloseCashRegister();
 WorkFlowOperations.PrioriPOSClose();

}
 