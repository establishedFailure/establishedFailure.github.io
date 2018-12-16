function givItTheOlSwitcheroo()
{
	var age = parseFloat(prompt("Please input your age between 10-20",""));
	
	switch(true)
		{
		case (age < 15 && age >= 10 && age == Math.round(age)):
			alert("You are " + age + " years old and you are less than 15.");
			break;
		case (age > 15 && age <= 20 && age == Math.round(age)):
			alert("You are " + age + " years old and you are greater than 15.");
			break;
		case (age == 15):
			alert("You are " + age + " years old");
			break;
		
		default: //all other outcomes
			alert("Your number must be an integer between 10 and 20 and cannot be a decimal.");
			break;
		}
}








/*
function start()
{
	var age = prompt("Input your age between 10-20","");
	
	if(typeof age == number)
		{
			alert("Your input must be a number");
			return;
		}
	else
		{
		age = parseInt(age);
		}
}
*/