function Debug(StrValue) {
    // ***************************************************************
    // Function Name : Debug
    // Description   : Pause script and show an inputbox with values.
    // Parameters    : None
    // Returns       : none
    // Dependancies  : None
    // ***************************************************************

    BuiltIn.InputBox(StrValue, "Debug", StrValue);

}
// _______________________________________________________________________________________________________________________________________________________________  

function BlinkObject(ObjectToBlink) {

    let Interval = 200;

    ObjectToBlink.BorderStyle = 1;
    Delay(Interval);
    ObjectToBlink.BorderStyle = 2;
    Delay(Interval);
    ObjectToBlink.BorderStyle = 1;
    Delay(Interval);
    ObjectToBlink.BorderStyle = 0;
    Delay(Interval);

}
// _______________________________________________________________________________________________________________________________________________________________  

function CloseProcessIfExists(ProcessName) {

    var WshShell = Sys.OleObject("WScript.Shell");
    var command = 'taskkill /F /IM "' + ProcessName + '.exe"';

    var result = WshShell.Run(command, 0, true);

    if (result === 0) {

        Log.Message("The application: '" + ProcessName + "' successfully closed");
        return "success";

    } else if (result === 128) {

        //Log.Warning("The application: '" + ProcessName + "' is not running.");
        return "Non trouvé";

    } else {

        Log.Error("Error closing application '" + ProcessName + "'. Code: " + result);
        return "error";

    }
}
// _______________________________________________________________________________________________________________________________________________________________

// *** Exports************************************************ 
module.exports.BlinkObject = BlinkObject;
module.exports.CloseProcessIfExists = CloseProcessIfExists;
module.exports.Debug = Debug;
// *********************************************************** 