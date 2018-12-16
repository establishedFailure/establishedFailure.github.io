function calculate(date)
{
	document.getElementById("outputSec").innerHTML ="Difference in seconds: " + Math.round((date / 1000));
	document.getElementById("outputMin").innerHTML ="Difference in minutes: " + Math.round((date / 60000));
	document.getElementById("outputHour").innerHTML ="Difference in hours: " + Math.round((date / 3600000));
	document.getElementById("outputDay").innerHTML ="Difference in days: " + Math.round((date / 86400000));
	document.getElementById("outputMon").innerHTML ="Difference in months: " + Math.round((date / 2592000000));
	document.getElementById("outputYear").innerHTML ="Difference in years: " + Math.round((date / 31556900000));
}

function kek()
{
	var second1 =  (document.getElementById("second1").value);
	var min1 =  (document.getElementById("min1").value);
	var hour1 =  (document.getElementById("hour1").value);
	var day1 =  (document.getElementById("day1").value);
	var month1 =  (document.getElementById("month1").value);
	var year1 =  (document.getElementById("year1").value); //JS already recognizes leap years

	var second2 =  (document.getElementById("second2").value);
	var min2 =  (document.getElementById("min2").value);
	var hour2 =  (document.getElementById("hour2").value);
	var day2 =  (document.getElementById("day2").value);
	var month2 =  (document.getElementById("month2").value);
	var year2 =  (document.getElementById("year2").value);
	
	var date1 = new Date(year1, month1, day1, hour1, min1, second1);
	var date2 = new Date(year2, month2, day2, hour2, min2, second2);
	
	var dateDifference1 = date1.getTime() - date2.getTime(); //useful for checking negative output
	var dateDifference2 = date2.getTime() - date1.getTime();
	
	if(dateDifference1 > 0)
	{
		calculate(dateDifference1);
	}
	else
	{
		calculate(dateDifference2);
	}
}