var info = document.getElementById("Table");
var clk_btn = document.getElementById("getbtn");
document.getElementById("count").innerHTML = 0;

function myFunction(){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
	if (req.readyState == 4 && req.status == 200){
		var myObj = JSON.parse(req.responseText);
		console.log(myObj);
        renderHTML(myObj);			
	  }			
   };
   req.open("GET","C:\Users\Abha Suntwal\Desktop\Table_Filter\Tfilter.json");
   req.send();
}

function renderHTML(myObj){
	var fstring = "";
	var i;
	for(i=0; i < myObj.length; i++){
		fstring = fstring + "<tr><td>"+myObj[i].country + "</td><td>" + myObj[i].capital+ "</td></tr>" ;
	}
    if(i == myObj.length){
       document.getElementById("count").innerHTML = i;
       document.getElementById("getbtn").style.display = 'none';	   
	   document.getElementById("myInput").style.display = 'block';
	}
	info.insertAdjacentHTML('beforeend' , fstring);
} 

function findText()
{
	var input, filter, table, tr, i, count = 0;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for(i = 0 ; i < tr.length ;i++){
		var td1 = tr[i].getElementsByTagName("td")[0];
		var td2 = tr[i].getElementsByTagName("td")[1];
		if(td1+td2)
		{
			if((td1.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter))>-2){
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