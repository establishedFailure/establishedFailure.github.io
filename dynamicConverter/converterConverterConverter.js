function getDunkdOnFargh()
{
	var x = parseFloat(document.getElementById("fahr").value); //get parsed on
	var aVariable = (x - 32) * (5/9);
	document.getElementById("cels").value = aVariable;
}

function getDunkdOnCels()
{
	var y = parseFloat(document.getElementById("cels").value);
	var anotherVariable = (y * 1.8) + 32; ///insane algebra skillz
	document.getElementById("fahr").value = anotherVariable;
}
