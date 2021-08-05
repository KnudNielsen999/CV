var now=new Date();
var yy=now.getFullYear();
var mm=now.getMonth();
var dd=now.getDate();
var dy=now.getDay();
var str=yy+":"+mm+":"+dd+" dag nr :"+dy;
document.getElementById(id="dato").innerHTML=str;
