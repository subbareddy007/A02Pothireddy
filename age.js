function calage()
{
	var yob1 = document.getElementById("yob").value;
    var pyear1 = document.getElementById("pyear").value;
	
	var result = parseInt(pyear1) - parseInt(yob1);
	if (result>0) {
	window.alert("Your Age is:"+ result);
}
else
window.alert("Please enter years in proper way");
}