var info = document.getElementById("Table");
var clk_btn = document.getElementById("getbtn");
document.getElementById("count").innerHTML = 0;

function myFunction()
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
	  if (req.readyState == 4 && req.status == 200)
	  {
		var myObj = JSON.parse(req.responseText);
		console.log(myObj);
          renderHTML(myObj);			
	  }			
       };
	req.open('GET','https://abha11.github.io/LinkedIn_design/Tfilter.json');
        req.send();
}

function renderHTML(myObj){
	var htmlstring = "";
	var i;
	for(i=0; i < myObj.length; i++)
	{
		htmlstring = htmlstring + "<tr><td>"+myObj[i].country + "</td><td>" + myObj[i].capital+ "</td><td>" + myObj[i].country_code + "</td></tr>" ;
	}
    if(i == myObj.length){
       document.getElementById("count").innerHTML = i;
       document.getElementById("getbtn").style.display = 'none';	   
	   document.getElementById("myInput").style.display = 'block';
	}
	info.insertAdjacentHTML('beforeend' , htmlstring);
} 

function findText()
{
	var input, filter, table, tr, i, count = 0;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("Table");
	tr = table.getElementsByTagName("tr");
	for(i = 0 ; i < tr.length ;i++){
		var td1 = tr[i].getElementsByTagName("td")[0];
		var td2 = tr[i].getElementsByTagName("td")[1];
		var td3 = tr[i].getElementsByTagName("td")[2];
		if(td1+td2)
		{
			if((td1.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter)+td3.innerHTML.toUpperCase().indexOf(filter))>-3){
				count++;
				tr[i].style.display = "";
			}
			else{
				tr[i].style.display = 'none';
			}
			document.getElementById("count").innerHTML = count;
		}
			
	}
	
}
