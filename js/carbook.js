function carbook()
{	
	if(document.getElementById('pick-up-location').value=="")
	{
		alert("Please select pick-up city");
		document.getElementById('pick-up-location').focus();
		return false;
	}
	
	if(document.getElementById('drop-off-location').value=="")
	{
		alert("Please select rop-off city");
		document.getElementById('drop-off-location').focus();
		return false;
	}
	
	if(document.getElementById('pick-up-date').value=="")
	{
		alert("Please select pick-up date");
		document.getElementById('pick-up-date').focus();
		return false;
	}
	if(document.getElementById('pick-up-time').value=="")
	{
		alert("Please select pick-up time");
		document.getElementById('pick-up-time').focus();
		return false;
	}
	
	if(document.getElementById('drop-off-date').value=="")
	{
		alert("Please select drop-off date");
		document.getElementById('drop-off-date').focus();
		return false;
	}
	if(document.getElementById('drop-off-time').value=="")
	{
		alert("Please select drop-off time");
		document.getElementById('drop-off-time').focus();
		return false;
	}
}
