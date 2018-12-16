function kebinMustDie()
{
	var numberIsNotAKnife = parseFloat(prompt("Please enter an integer between 5 and 10. YOU MUST FOLLOW MY ORDERS", ""))
	
	switch (true)
	{
	case (numberIsNotAKnife >= 5 && numberIsNotAKnife <= 10 && numberIsNotAKnife == Math.round(numberIsNotAKnife)):
		for(var countyBOi = 0; countyBOi <= numberIsNotAKnife; countyBOi++)
			{
				alert(countyBOi);
			}
	break;
	
	default:
		alert("You did not follow my orders. As your punishment, you shall suffer");
		while(true)
			{
				prompt("");
			}
	}
}