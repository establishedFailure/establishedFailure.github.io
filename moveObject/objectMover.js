var objectEntity = null;
var headerEntity = null;

function update()
{
	objectEntity = document.getElementById("eek");
	objectEntity.style.position='relative';
	objectEntity.style.left='0px';// X
	objectEntity.style.top='0px'; // Y
	
	headerEntity = document.getElementById("headerChange");
}
function movementButton(button)
{
	switch(button)
	{
	case 1: //up
		objectEntity.style.top=parseInt(objectEntity.style.top) - 30 + "px";
		headerEntity.innerHTML = "UP";
		break;
	case 2: //left
		objectEntity.style.left=parseInt(objectEntity.style.left) - 30 + "px";
		headerEntity.innerHTML = "LEFT";
		break;
	case 3: //down
		objectEntity.style.top=parseInt(objectEntity.style.top) + 30 + "px";
		headerEntity.innerHTML = "DOWN";
		break;
	case 4: //right
		objectEntity.style.left=parseInt(objectEntity.style.left) + 30 + "px";
		headerEntity.innerHTML = "RIGHT";
		break;
	case 5: //appear
		objectEntity.style.display = "block"
			headerEntity.innerHTML = "REAPPEAR";
		break;
	case 6: //disappear
		objectEntity.style.display = "none"
			headerEntity.innerHTML = "DISAPPEAR";
		break;
	}
}
function getKey(eventType)
{				
	var key=eventType.which||eventType.keyCode;
	switch(key)
	{
		case 37: //left arrow key
		movementButton(2);
		break;
		case 38: //Up arrow key
		movementButton(1);
		break;
		case 39: //right arrow key
		movementButton(4);
		break;
		case 40: //down arrow key
		movementButton(3);
		break;
	}
}