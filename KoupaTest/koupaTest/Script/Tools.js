
// *** Includes************************************* 
var Library = require("Library");
//**************************************************

// _______________________________________________________________________________________________________________________________________________________________

function OpenRepositoryFile() {
  
  let Shell = Sys.OleObject("WScript.Shell");

  let FilePath = Project.Path + "\\Stores\\Files\\ObjectRepository.txt";
  //Log.Message("File path: " + FilePath);

  // Open Repository File
  Shell.Run("code \"" + FilePath + "\"", 0, false);

}
// _______________________________________________________________________________________________________________________________________________________________

function DeleteDumpFiles() {
  
  var StrFolder = "C:/Program Files/Microsoft SQL Server/MSSQL16.ESHBEL_PRIORITY/MSSQL/Log/Polybase/dump";
  var StrFiles = aqFileSystem.GetFolderInfo(StrFolder).Files;

  for (var i = 0; i < StrFiles.Count; i++) {
    
    var StrFile = StrFiles.Item(i);
    //Log.Message(StrFile.Name + " Deleted");
    aqFileSystem.DeleteFile(StrFile.Path); 
    
  }
}
// _______________________________________________________________________________________________________________________________________________________________

function DeleteLogFiles() {
  
  var StrFolder = Project.Path + "\\log";
  var StrFiles = aqFileSystem.GetFolderInfo(StrFolder).Files;

  for (var i = 0; i < StrFiles.Count; i++) {
    
    var StrFile = StrFiles.Item(i);
    //Log.Message(StrFile.Name + " Deleted");
    aqFileSystem.DeleteFile(StrFile.Path); 
    
  }
}
// _______________________________________________________________________________________________________________________________________________________________

function DeleteTempFiles() {
  
  var StrFolder =aqEnvironment.GetEnvironmentVariable("TEMP");
  var StrFiles = aqFileSystem.GetFolderInfo(StrFolder).Files;

  for (var i = 0; i < StrFiles.Count; i++) {
    
    var StrFile = StrFiles.Item(i);
    //Log.Message(StrFile.Name + " Deleted");
    aqFileSystem.DeleteFile(StrFile.Path); 
    
  }
}
// _______________________________________________________________________________________________________________________________________________________________