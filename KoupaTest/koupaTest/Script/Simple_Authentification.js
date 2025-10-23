
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");


function LogOnPrioriPOSWith_Test(){
    
   KeyActions.LaunchApp("PrioriPOSGUI", 20);
   MetaActions.LogOnPrioriPOS("2011","111"); 
   
}
    
function LogOnPrioriPOSWith(User, PassWord)
{
    KeyActions.LaunchApp("PrioriPOSGUI", 20);
    MetaActions.LogOnPrioriPOS(User, PassWord); 
   
}