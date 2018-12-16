 function finishTheJob()
    {
    	if(eval(document.getElementById("displayBox").value) == "Infinity")
   			{
				document.getElementById("displayBox").value = "Division by zero";
   			}
    	else
    		{
    			document.getElementById("displayBox").value = eval(document.getElementById("displayBox").value);    		
    		}
    	return;
    }
    
function functionMakerMagikTurboTronProduct(buttonMaster)
    {
    	document.getElementById("displayBox").value += buttonMaster;
    	return;
    }