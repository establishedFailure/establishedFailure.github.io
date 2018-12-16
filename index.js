function inflate(object, mode)
{
		if(mode == 0) //expand
		{
			object.style.height = "50%";
			object.style.width = "50%";			
		}
		if(mode == 1) //de expand
		{
			object.style.height = "30%";
			object.style.width = "30%";			
		}
}