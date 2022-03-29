var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;

document.getElementById('theDate').value = today;
var parts =today.split('-');

var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
console.log(mydate.toDateString());

function Difference(date1, date2){
		// To set two dates to two variables
		var date1 = new Date(document.getElementById('date1').value);
		var date2 = new Date(document.getElementById('date2').value);
		// To calculate the time difference of two dates
		var Difference_In_Time = date2.getTime() - date1.getTime();
			
		// To calculate the no. of days between two dates
		var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
		  
		//To display the final no. of days (result)
		alert(Difference_In_Days + " days went since ");
	}
