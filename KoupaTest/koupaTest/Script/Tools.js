
// *** Includes************************************* 
var Library = require("Library");
//**************************************************

// _______________________________________________________________________________________________________________________________________________________________  

function OpenGherkinScenarios() {
  
  let Shell = Sys.OleObject("WScript.Shell");

  let FilePath = Project.Path;

  //Log.Message("File path: " + FilePath);

  // Open Scenario Folder
  Shell.Run("code \"" + FilePath + "\"", 0, false);
  
}
// _______________________________________________________________________________________________________________________________________________________________

function OpenRepositoryFile() {
  
  let Shell = Sys.OleObject("WScript.Shell");

  let FilePath = Project.Path + "\\Stores\\Files\\ObjectRepository.txt";

  //Log.Message("File path: " + FilePath);

  // Open Repository File
  Shell.Run("code \"" + FilePath + "\"", 0, false);

}
// _______________________________________________________________________________________________________________________________________________________________