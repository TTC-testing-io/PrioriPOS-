//USEUNIT ControlOperations
//USEUNIT Library
//USEUNIT ObjectRepository
//USEUNIT WorkFlowOperations

// *** Includes************************************* 
var ControlOperations = require("ControlOperations");
var WorkFlowOperations = require("WorkFlowOperations");
var ObjectRepository = require("ObjectRepository");
var Library = require("Library");
//**************************************************

// _________________________________________________________________________________________________________________________________________________________________

// [BeforeScenario]
BeforeScenario(function(scenario) {
// scenario parameter contains the Scenario object with Tags property
    
  if (scenario.Tags.Contains("@PrioriPOS_User1")) {
    
    Log.Message("Before : Launch PriroriPOS with User1 => 2011|111");
    
    Project.Variables.APP_NAME = "PrioriPOSGUI";
    APP_NAME = Project.Variables.APP_NAME  
    
//    LogOnPrioriPosWith(APP_NAME, "2011", "111");

    ControlOperations.LaunchApp("PrioriPOSGUI", 20);  
    WorkFlowOperations.PrioriPOSLogAccount("User1")
    
  } else if (scenario.Tags.Contains("@PrioriPOS_UserRetail")) {
    
    Log.Message("Before : Launch PriroriPOS with User1 => 0987|0987");
    
    Project.Variables.APP_NAME = "PrioriPOSGUI";
    APP_NAME = Project.Variables.APP_NAME  
//    
//    LogOnPrioriPosWith(APP_NAME,"0987", "0987");
//    
    ControlOperations.LaunchApp("PrioriPOSGUI", 20);  
    WorkFlowOperations.PrioriPOSLogAccount("Retail")
    
  } 
  
})
// _________________________________________________________________________________________________________________________________________________________________

// [AfterScenario]
AfterScenario(function(scenario) {
// scenario parameter contains the Scenario object with Tags property
    
  if (scenario.Tags.Contains("@PrioriPOS_CLOSE")) {
    
   Log.Message("After : Close PriroriPOS With confirmation");
    
   WorkFlowOperations.PrioriPOSClose()
    
  } 
     
})
// _________________________________________________________________________________________________________________________________________________________________
