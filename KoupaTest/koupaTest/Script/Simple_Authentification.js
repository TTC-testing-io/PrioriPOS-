
var KeyActions = require("KeyActions");
var MetaActions = require("MetaActions");
    
function LogOnPrioriPOSWith(User, PassWord)
{
  
 MetaActions.LogOnPrioriPOS(User, PassWord); 
   
}

function LogOnPrioriPOSWith_Test(){
  
 KeyActions.LaunchApp("PrioriPOSGUI", 20);  
 MetaActions.LogOnPrioriPOS("2011", "111")
   
}