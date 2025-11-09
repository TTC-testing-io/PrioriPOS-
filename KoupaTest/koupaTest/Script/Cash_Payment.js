
// *** Includes**************************************** 
//USEUNIT ControlOperations
//USEUNIT WorkFlowOperations
var ControlOperations = require("ControlOperations");
var WorkFlowOperations = require("WorkFlowOperations");
// ****************************************************

function Cash_Payment() {
  
 let StrAccount="User1"
 
 Library.CloseProcessIfExists("PrioriPOSGUI"); 
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 //MetaActions.PrioriPOSCheckIn("User1")
 WorkFlowOperations.PrioriPOSCashPaiement("User1")

}
 