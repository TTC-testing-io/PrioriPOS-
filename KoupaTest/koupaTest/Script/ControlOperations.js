// *** Includes************************************* 
//USEUNIT ObjectRepository
//USEUNIT Library
var ObjectRepository = require("ObjectRepository");
var Library = require("Library");
// *************************************************

var ObjectRepo;

ObjectRepo = ObjectRepository.ReadOR()

// _________________________________________________________________________________________________________________________________________________________________

function LaunchApp(ApplicationName, TimeOutMax) {

    let ProcessFound;

    // Launch the Application

    Project.Variables.APP_NAME = ApplicationName;

    switch (ApplicationName.toLowerCase()) {

        case "prioriposgui":

            TestedApps.PrioriPOSGUI.Run(1, true);
            break;

        default:

            BuiltIn.MessageDlg("The application: '" + ApplicationName + "' is not present in the TestedApps folder", mtWarning, 0, 0);
            Runner.Stop();
            break;

    }

    // Wait Staring process (TimeOutMax en millisecondes)
    ProcessFound = Sys.WaitProcess(ApplicationName, TimeOutMax * 1000);

    if (!ProcessFound.Exists) {

        Log.Error(`The process ${ApplicationName} did not started after ${TimeOutMax} seconds.`);
        return null;

    }

    Log.Message(`Process ${ApplicationName} Start Successfull`);
}
// _________________________________________________________________________________________________________________________________________________________________

function AppIsClosed(ApplicationName, TimeOutMax) {

    let StartTime = Timer;
    let IsClosed = false;

    while (Timer - StartTime < TimeOutMax) {

        if (!Sys.Process(ApplicationName).Exists) {

            IsClosed = true;
            break;

        }

        Delay(1000);
    }

    if (IsClosed) {

        Log.Checkpoint(`The process '${ApplicationName}' has been successfully Closed.`);
        return true;

    } else {

        Log.Error(`The process '${ApplicationName}' is still running after ${TimeOutMax} seconds.`);
        return false;

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function FormIsDisplayed(ApplicationName, FormName) {

    let ObjForm = ObjectRepository.GetForm(ObjectRepo, ApplicationName, FormName);

    if (ObjForm.Exists) {

        Log.Picture(ObjForm, `The form : ${FormName}  is Displayed`);

    } else {

        Log.Error(`Error FormIsDisplayed : ${FormName} is Not Displayed`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function FormIsNotDisplayed(ApplicationName, FormName) {

    let ObjForm = ObjectRepository.GetForm(ObjectRepo, ApplicationName, FormName);

    Wait(3);

    if (!ObjForm.Exists) {

        Log.Picture(ObjForm, `The form : ${FormName} is Not Displayed`);

    } else {

        Log.Error(`Error FormIsNotDisplayed : ${FormName} : is Displayed`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function SetField(ApplicationName, FormName, ObjectName, Value) {

    let ObjTextBox = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "TextBox", ObjectName);

    if (ObjTextBox.Exists) {

        ObjTextBox.SetFocus();
        ObjTextBox.SetText(Value);

        Log.Checkpoint(`${ObjectName} : ${Value}`);

    } else {

        Log.Error(`Error SetField : ${ObjectName} : Not Found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function ClickButton(ApplicationName, FormName, ObjectName) {

    let ObjButton = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "Button", ObjectName);

    if (ObjButton.Exists) {

        ObjButton.SetFocus();
        ObjButton.Click();

        Log.Checkpoint(`Button ${ObjectName} : Clicked`);

    } else {

        Log.Error(`Error ClickButton : ${ObjectName} : Not found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function ClickButtonUntilEnabledElement(ApplicationName, FormName, ObjectName, RefObjectType, RefObjectName, TimeOutMax) {

    let ObjButton = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "Button", ObjectName);
    let ObjRefElement;

    let AttemptCount = 0;
    let RefButtonState = false;

    ObjRefElement = ObjectRepository.GetDisabledElement(ObjectRepo, ApplicationName, FormName, RefObjectType, RefObjectName);

    if (ObjButton.Exists) {

        while (RefButtonState == false || AttemptCount <= TimeOutMax) {

            AttemptCount++;
            ObjRefElement.Refresh();
            ObjButton.SetFocus();
            ObjButton.Click();
            Delay(1000);
            RefButtonState = ObjRefElement.Enabled;

            if (RefButtonState == true) {break;}
         
        }

        if (AttemptCount > 1) {

            Log.Warning(`ForceButton Warning : Button Clicked ${AttemptCount} Times`);

        }

    } else {

        Log.Error(`Error ClickButtonUntilEnabledElement : ${ObjectName} : Not found`);

    }

}
// _________________________________________________________________________________________________________________________________________________________________
 
function ElementIsEnabled(ApplicationName, FormName, ObjectType, ObjectName) {

    let ObjElement = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, ObjectType, ObjectName);

    if (ObjElement.Exists) {

        if (ObjElement.Enabled === true) {

            Log.Checkpoint(`${ObjectType} : ${ObjectName} => Enabled`);

        } else {

            Log.Error(`Error ElementIsEnabled : ${ObjectType} : ${ObjectName} => Disabled`);

        }

    } else {

        Log.Error(`Error ElementIsEnabled : ${ObjectName} : Not Found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function ElementsAreEnabled(ApplicationName, FormName, ObjectType, ObjectNames) {

    let TabObjName = ObjectNames.split("|");

    for (let i = 0; i < TabObjName.length; i++) {

        let TmpName = TabObjName[i];

        ElementIsEnabled(ApplicationName, FormName, ObjectType, TmpName);

    }

}
// _________________________________________________________________________________________________________________________________________________________________

function ElementIsDisabled(ApplicationName, FormName, ObjectType, ObjectName) {

    let ObjElement = ObjectRepository.GetDisabledElement(ObjectRepo, ApplicationName, FormName, ObjectType, ObjectName);

    if (ObjElement.Exists) {

        if (ObjElement.Enabled === false) {

            Log.Checkpoint(`${ObjectType} : ${ObjectName} => Disabled`);

        } else {

            Log.Error(`Error ElementIsDisabled : ${ObjectType} : ${ObjectName} => Enabled`);
        }
    } else {

        Log.Error(`Error ElementIsDisabled : ${ObjectName} : Not Found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function ElementsAreDisabled(ApplicationName, FormName, ObjectType, ObjectNames) {

    let TabObjName = ObjectNames.split("|");

    for (let i = 0; i < TabObjName.length; i++) {

        let TmpName = TabObjName[i];

        ElementIsDisabled(ApplicationName, FormName, ObjectType, TmpName);

    }

}
// _________________________________________________________________________________________________________________________________________________________________

function CheckLabel(ApplicationName, FormName, ObjectType, ObjectName, ExpectedValue) {

    let ObjLabel = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, ObjectType, ObjectName);

    if (ObjectType === "StaticLabel") {

        ExpectedValue = ObjectRepository.GetStaticParameter(ObjectRepo, ApplicationName, FormName, ObjectType, ObjectName);

    }

    if (ObjLabel.Exists) {

        Library.BlinkObject(ObjLabel);

        let ActualValue = ObjLabel.WndCaption;

        if (ActualValue === ExpectedValue) {

            Log.Checkpoint(`${ObjectName} : ${ExpectedValue}`);

        } else {

            Log.Error(`Error CheckLabel : Expected Value => ${ExpectedValue} | Actual Value => ${ActualValue}`);

        }

    } else {

        Log.Error(`Error CheckLabel : ${ObjectName} : Not Found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function CheckField(ApplicationName, FormName, ObjectType, ObjectName, ExpectedValue) {

    let ObjTextBox = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "TextBox", ObjectName);

    if (ObjTextBox.Exists) {

        ObjTextBox.SetFocus();

        let ActualValue = wText;

        if (ActualValue === ExpectedValue) {

            Log.Checkpoint(`${ObjectName} : ${ExpectedValue}`);

        } else {

            Log.Error(`Error CheckField : Expected Value => ${ExpectedValue} | Actual Value => ${ActualValue}`);

        }

    } else {

        Log.Error(`Error CheckField : ${ObjectName} : Not Found`);

    }
}
// _________________________________________________________________________________________________________________________________________________________________

function CheckButtonCaption(ApplicationName, FormName, ObjectName, ExpectedValue) {

    let ObjButton = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "Button", ObjectName);

    if (ObjButton.Exists) {

        let ActualValue = ObjButton.WndCaption;

        if (ActualValue === ExpectedValue) {

            Log.Checkpoint(`${ObjectName} : ${ExpectedValue}`);

        } else {

            Log.Error(`Error CheckButtonCaption : Expected Value => ${ExpectedValue} | Actual Value => ${ActualValue}`);

        }

    } else {

        Log.Error(`Error CheckButtonCaption : ${ObjectName} : Not Found`);

    }
}
// _______________________________________________________________________________________________________________________________________________________________  

function GetAccount(ApplicationName, AccountName) {

    let StrMessageError;
    let StrError;
    let StrKey;
    let SterAccount;

    StrKey = ApplicationName + ".Account." + AccountName;

    StrAccount = ObjectRepo[StrKey];

    if (StrAccount === "" || StrAccount === undefined) {

        StrMessageError = "The Account :" + StrAccount + "' does not exist on the Object Repository";
        StrError = BuiltIn.InputBox("ObjectRepository Object Error", StrMessageError, StrKey);

    }

    return StrAccount;

}
// _________________________________________________________________________________________________________________________________________________________________

function SetCellValue(ApplicationName, FormName, ObjectName, RowIndex, ColName, Value) {

    let ObjGrid = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "Grid", ObjectName);

    if (ObjGrid.Exists) {

        ClickCell(ObjGrid, RowIndex, ColName);
        UpdateCell(ObjGrid, Value, true);
        Log.Message("SetCellValue " + ObjectName + " : On " + ColName + " at line " + RowIndex + " => " + Value);

    } else {

        Log.Error("Error SetCellValue : " + ObjectName + " : Not Found");

    }

}
// _________________________________________________________________________________________________________________________________________________________________

function CheckCellValue(ApplicationName, FormName, ObjectName, RowIndex, ColName, ExpectedValue) {

    let ObjGrid = ObjectRepository.GetElement(ObjectRepo, ApplicationName, FormName, "Grid", ObjectName);

    if (ObjGrid.Exists) {

        ClickCell(ObjGrid, RowIndex, ColName);
        CheckCell(ObjectName, Objgrid, RowIndex, ColName, ExpectedValue);

    } else {

        Log.Error("Error CheckCellValue : " + ObjectName + " : Not Found");

    }

}
// _________________________________________________________________________________________________________________________________________________________________

function CheckCell(ObjectName, Objgrid, RowIndex, ColName, ExpectedValue){

    let ActualValue;
    let ColumnIndex;

    ColumnIndex = FindColumnIndex(ObjGrid, ColName);
    ActualValue = ObjGrid.Item(RowIndex, ColumnIndex).CellValue ;
  
    if (ActualValue.Equals(ExpectedValue)){
  
        Log.Checkpoint(`${ObjectName} : ${ExpectedValue}`);


    } else {
  
        Log.Error(`Error CheckField : Expected Value => ${ExpectedValue} | Actual Value => ${ActualValue}`);

    }

}
// _________________________________________________________________________________________________________________________________________________________________

function ClickCell(ObjGrid, RowIndex, ColName) {

    let ColumnIndex;
    let cell;
    let rect;

    ColumnIndex = FindColumnIndex(ObjGrid, ColName);

    if (ColumnIndex == -1) {

        Log.Error("Error ClickCell: Column '" + ColName + "' not found " + " in ObjGrid : " + ObjGrid.Name);

    } else {

        // Make cell visible
        ObjGrid.ScrollCellInView_3(RowIndex, ColumnIndex);

        cell = ObjGrid.GridCellsRange.Cell(RowIndex, ColumnIndex);

        // Get the cell coordinates
        rect = ObjGrid.RangeInfoToRectangle(cell);

        ObjGrid.Click(rect.X + rect.Width / 2, rect.Y + rect.Height / 2);
    }

}
// _________________________________________________________________________________________________________________________________________________________________

function UpdateCell(ObjGrid, Value, PushEnterKey) {

    ObjGrid.Keys(Value);

    if (PushEnterKey) {
        ObjGrid.Keys('[Enter]');
        Log.Message("Key [Enter] pushed");
    }

}
// _________________________________________________________________________________________________________________________________________________________________

function FindRowByCellValue(ObjGrid, ColName, Value) {

    let StartRowIndex;
    let EndRowIndex;
    let i;

    let ColumnIndex = FindColumnIndex(ObjGrid, ColName);

    if (ColumnIndex == -1) {

        Log.Error("Error FindRowByCellValue : Column '" + ColName + "' not found " + " in Grid : " + ObjGrid.Name);
        
    } else {

        // Get indexes of the first and last data rows
        StartRowIndex = ObjGrid.ObjGridCellsRange.Top;
        EndRowIndex = ObjGrid.ObjGridCellsRange.Bottom;

        // Iterate through data rows
        for (i = StartRowIndex; i <= EndRowIndex; i++) {
            // Compare the cell value with the specified value
            if (ObjGrid.Item(i, ColumnIndex).CellValue.Equals(Value))
                return i; // Row is found
        }
    }

    return -1; // Row is not found
}
// _________________________________________________________________________________________________________________________________________________________________

function FindColumnIndex(ObjGrid, ColName) {

    let j;
    let currentColumnHeader;
    let currentColumnHeaderValue;
    let itemColumnIndex = -1;

    //Log.Message ("Total number of columns: " + ObjGrid.Model.ColCount);

    for (j = 0; j < ObjGrid.Model.ColCount; j++) {

        currentColumnHeader = ObjGrid.Item(0, j);
        currentColumnHeaderValue = currentColumnHeader.CellValue.OleValue;

        if (currentColumnHeaderValue == ColName) {
            itemColumnIndex = j;
            break;
        }

        //Log.Message ("Column [" + j + "]: " + currentColumnHeader.CellValue.OleValue);
    }
    return itemColumnIndex;
}
// _________________________________________________________________________________________________________________________________________________________________

function CheckPointGridValue(ObjGrid, RowIndex, ColName, Value) {

    var timeout = 2000;
    var delayInterval = 100;
    var timeoutCounter = 0;
    var checkPointSuccess = false;

    let ColumnIndex = FindColumnIndex(ObjGrid, ColName);

    var ObjGridItem;

    if (columnIndex == -1) {

        Log.Error("CheckpointObjGridValue: Column '" + ColName + "' not found " + " in ObjGrid : " + ObjGrid.Name);

    } else {
        ObjGridItem = ObjGrid.Item(RowIndex, ColumnIndex);

        //aqObject.CheckProperty(GridItem.FormattedText, "OleValue", cmpEqual, value);

        while (!checkPointSuccess && timeoutCounter <= timeout) {
            checkPointSuccess = trim(ObjGridItem.FormattedText.OleValue.replace(/[^A-Za-z\u0590-\u05FF0-9. ]/g, '')) == trim(Value.replace(/[^A-Za-z\u0590-\u05FF0-9. ]/g, ''));
            if (!checkPointSuccess) {
                Delay(delayInterval);
                timeoutCounter += delayInterval;
            }
        }
    }
    return checkPointSuccess;
}
// _________________________________________________________________________________________________________________________________________________________________

function Wait(MiliSeconds) {

    MiliSeconds = parseInt(MiliSeconds);
    let Seconds = MiliSeconds * 1000;
    Delay(Seconds);

}
// _________________________________________________________________________________________________________________________________________________________________

function PausePopup() {

    BuiltIn.ShowMessage("Click OK to continue");

}
// _________________________________________________________________________________________________________________________________________________________________

// ***Exports******************************************************************
module.exports.LaunchApp = LaunchApp;
module.exports.GetAccount = GetAccount;
module.exports.AppIsClosed = AppIsClosed;
module.exports.FormIsDisplayed = FormIsDisplayed;
module.exports.SetField = SetField;
module.exports.ClickButton = ClickButton;
module.exports.ClickButtonUntilEnabledElement = ClickButtonUntilEnabledElement;
module.exports.ElementIsEnabled = ElementIsEnabled;
module.exports.ElementIsDisabled = ElementIsDisabled;
module.exports.ElementsAreEnabled = ElementsAreEnabled;
module.exports.ElementsAreDisabled = ElementsAreDisabled;
module.exports.CheckLabel = CheckLabel;
module.exports.CheckButtonCaption = CheckButtonCaption;
module.exports.Wait = Wait;
module.exports.PausePopup = PausePopup;
module.exports.CheckField = CheckField;
module.exports.FormIsNotDisplayed = FormIsNotDisplayed;
module.exports.SetCellValue = SetCellValue;
module.exports.ClickCell = ClickCell;
module.exports.UpdateCell = UpdateCell;
module.exports.FindRowByCellValue = FindRowByCellValue;
module.exports.FindColumnIndex = FindColumnIndex;
module.exports.CheckCellValue = CheckCellValue;
module.exports.CheckCell = CheckCell;
module.exports.CheckPointGridValue = CheckPointGridValue;
// ****************************************************************************
