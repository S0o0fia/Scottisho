  var x = 0;
  function slide()
  {   
      setInterval("change(x+1)" , 1000);
      
  }
  
function change(x)
{
    document.getElementById("body").style.backgroundImage = "url('../html/back'"+x+"'.jpg')";
}

function show (x)
{

    // #item:hover .overlay {
    //     bottom: 0;
    //     height: 100%;
    //   }
 document.getElementsByClassName("visible")[x].style.opacity = 0.5;
 var y = document.getElementsByClassName("text");
 y[x].style.visibility = "visible";
 var z = document.getElementsByClassName("text2");
 z[x].style.visibility = "visible";

}

function hiden(x)
{

document.getElementsByClassName("visible")[x].style.opacity = 1.0;
 var y = document.getElementsByClassName("text");
 y[x].style.visibility = "hidden";
 var z = document.getElementsByClassName("text2");
 z[x].style.visibility = "hidden";

}
/////////////////////////////////////////////////////////////////////////

function login()
{
    document.getElementById('id01').style.display='block';
    document.getElementById('id01').style.visibility='visible';
}
 
document.getElementById("login").onclick = function()
{
    alert();
    document.getElementById('id01').style.display='none';
    document.getElementById('id01').style.visibility='hidden';
}
///////////////////////////////////////////////////////////////////
function cancel()
{
 
 document.getElementById('id01').style.display='none';
 document.getElementById('id01').style.visibility='hidden';

}
////////////////////////////////////////////////////////////////
function exit(e)
{
    if(e.keyCode == 27)
    {
    document.getElementById('id01').style.display='none';
   document.getElementById('id01').style.visibility='hidden';

  
    }

    /////////////////////////////////////////////////////////////

}
/////////////////////////////////////////////////////////////////////
function setLocalStorage()
{
	localStorage.user = document.getElementById("uname").value;
	localStorage.pass = document.getElementById("pws").value;
	alert("Data saved");
}

function getLocalStorage() 
{
   if (localStorage.user) 
	{
		document.getElementById("uname").value=localStorage.user;
  } 
	
	if (localStorage.pass) 
	{
		document.getElementById("pws").value=localStorage.pass;
	} 
}

function delLocalStorage()
{
	localStorage.removeItem("uname");
	localStorage.removeItem("pws");
	
}

function Remandsave()
{

    var checked =document.getElementById('Remmber').checked;
    if(checked)
    {
        setLocalStorage();

    }
    else
    {
        delLocalStorage();
    }
} 
//////////////////////////////////////////////////////////
function Goto ()
{
   
        location.href = "SignUp.html";
  
}

function Menu()
{
    window.open('Menu1.html','_blank');
}
////////////////////////////////////////////////////////////
var longitudeCoords=0;
var latitudeCoords=0;
function getLocation() {
	  		navigator.geolocation.getCurrentPosition(showPosition);
            goPosition();
        }
		function showPosition(position) {
			longitudeCoords=position.coords.longitude;
           latitudeCoords=position.coords.latitude;
        }
		
		function goPosition() {
	  	if (longitudeCoords==0 || latitudeCoords==0)
				getLocation();
                var url = "http://maps.google.com/maps?q=27.1821211,+31.1747776 ";
                window.open(url,'_blank');
     }
/////////////////////////////////////////////////////////////////////////////////////
function see()
{
    
    var x = document.getElementById("seemore");
    
    if(x.innerHTML=="Hide")
    {
        document.getElementById("more").style.display="none";
        x.innerHTML="see More";
    }
    else{
        document.getElementById("more").style.display="block";
        x.innerHTML="Hide";

    }

}