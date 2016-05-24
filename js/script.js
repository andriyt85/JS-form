
var Person = {}; 
function myFunction() { 			
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var lname = document.getElementById("lname").value;
	var birthday = document.getElementById("birthday").value;
	var regEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	Person.firstName = name;
	Person.lastName = lname;
	Person.email = email;
	Person.birthday = birthday;
	var form = document.getElementById("valForm");
	if ( name === '' || email === '' || lname === '' ) {
		alert("Please fill all fields!");
		return false;
	} else if ( name.length < 2 ) {
		alert("The name is too short!")
	} else if( !(email).match(regEmail) ) {
		alert("Please enter the correct email!");
		return false;
	} else {
		form.reset();
	}
}
function showObject() {	
	 document.getElementById("dis").disabled = false;

	var table = document.createElement("table");
 	table.setAttribute("id", "objTable");
 	document.body.appendChild(table);

 	var caption = document.getElementById("objTable").createCaption();
 	caption.innerHTML = "<strong>My object values</strong>";

 	var tr = document.createElement("tr");
 	tr.setAttribute("id", "row");
 	document.getElementById("objTable").appendChild(tr);

 	var th = document.createElement("th");
    var datah = document.createTextNode("First name");
    th.appendChild(datah);
    document.getElementById("row").appendChild(th);

    var th1 = document.createElement("th");
    var datah1 = document.createTextNode("Last name");
    th1.appendChild(datah1);
    document.getElementById("row").appendChild(th1);

    var th2 = document.createElement("th");
    var datah2 = document.createTextNode("E-mail");
    th2.appendChild(datah2);
    document.getElementById("row").appendChild(th2);

    var th3 = document.createElement("th");
    var datah3 = document.createTextNode("Birthday");
    th3.appendChild(datah3);
    document.getElementById("row").appendChild(th3);

 	var tr1 =document.createElement("tr");
 	tr1.setAttribute("id", "row1");
 	document.getElementById("objTable").appendChild(tr1);

	var td = document.createElement("td");
    var data = document.createTextNode(Person.firstName);
    td.appendChild(data);
    document.getElementById("row1").appendChild(td);

    var td1 = document.createElement("td");
    var data1 = document.createTextNode(Person.lastName);
    td1.appendChild(data1);
    document.getElementById("row1").appendChild(td1);

    var td2 = document.createElement("td");
    var data2 = document.createTextNode(Person.email);
    td2.appendChild(data2);
    document.getElementById("row1").appendChild(td2);

    var td3 = document.createElement("td");
    var data3 = document.createTextNode(Person.birthday);
    td3.appendChild(data3);
    document.getElementById("row1").appendChild(td3);
};
function deleteTable() {
	var tables= document.getElementsByTagName('table');
	while ( tables.length > 0 ) {
    tables[0].parentNode.removeChild(tables[0]);
	}
	document.getElementById("dis").disabled = true;
};
