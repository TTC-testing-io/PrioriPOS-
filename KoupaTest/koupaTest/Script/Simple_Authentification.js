
// *** Includes**************************************** 
//USEUNIT ControlOperations
//USEUNIT WorkFlowOperations
var ControlOperations = require("ControlOperations");
var WorkFlowOperations = require("WorkFlowOperations");
// ****************************************************

// @FunctionLoginTest1    
function Autentification_User_Password(){

let StrUser="2011";
let StrPassword="111"
 
 Library.CloseProcessIfExists("PrioriPOSGUI"); 
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.LogOnPrioriPOS(StrUser, StrPassword)
 WorkFlowOperations.PrioriPOSClose();
    
}

// @FunctionLoginTest2  
function Autentification_Account(){
  
 let StrAccount="User1";
 
 Library.CloseProcessIfExists("PrioriPOSGUI");  
 ControlOperations.LaunchApp("PrioriPOSGUI", 30);  
 WorkFlowOperations.PrioriPOSLogAccount(StrAccount);
 WorkFlowOperations.PrioriPOSClose();
   
}