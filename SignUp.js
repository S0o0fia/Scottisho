// document.getElementById('signup').onclick=
function check()
{ 
    alert();
   //check the similraty 
   var x = document.getElementById("password1");
   var y =  document.getElementById("password2");
    if(x.value != y.value)
    {  document.getElementById('confirm').textContent = "this is doesn't match";
       x.style.borderColor = "red";
      y.style.borderColor = "red";

}

}