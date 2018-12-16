function hecc()
{
	var someNubmer = parseFloat(prompt("Input number pls", ""));
	var upOrDown = document.getElementById("mode").value;
	if(upOrDown != 0)
		{
			for (var i = 0; i < 10; ++i)
			{
				if(upOrDown == 1)
					{
						someNubmer++;
					}
				if(upOrDown == 2)
					{
						someNubmer--;
					}
				alert(someNubmer);
			}
		}
	else
		{
			alert("Please select up or down");
		}
	
}


function looper()
{
	for (var loopCount = 0; loopCount <= 3; loopCount++)
		{
			alert(loopCount);
		}
}

function wHILElOOOP()
{
	var loop = 0;
	while (true)
		{
			loop++;
			alert(loop);
			
			if(loop == 10)
				{
					break;
				}
		}
}
