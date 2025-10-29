
// *** Includes************************************* 
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
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

    KeyActions.LaunchApp("PrioriPOSGUI", 20);  
    MetaActions.PrioriPOSLogAccount("User1")
    
  } else if (scenario.Tags.Contains("@PrioriPOS_UserRetail")) {
    
    Log.Message("Before : Launch PriroriPOS with User1 => 0987|0987");
    
    Project.Variables.APP_NAME = "PrioriPOSGUI";
    APP_NAME = Project.Variables.APP_NAME  
//    
//    LogOnPrioriPosWith(APP_NAME,"0987", "0987");
//    
    KeyActions.LaunchApp("PrioriPOSGUI", 20);  
    MetaActions.PrioriPOSLogAccount("Retail")
    
  } 
  
})
// _________________________________________________________________________________________________________________________________________________________________

// [AfterScenario]
AfterScenario(function(scenario) {
// scenario parameter contains the Scenario object with Tags property
    
  if (scenario.Tags.Contains("@PrioriPOS_CLOSE")) {
    
   Log.Message("After : Close PriroriPOS With confirmation");
    
   MetaActions.PrioriPOSClose()
    
  } 
     
})
// _________________________________________________________________________________________________________________________________________________________________
