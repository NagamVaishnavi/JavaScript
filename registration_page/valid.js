function myvalidation()
{
var uname=document.getElementById("uname").value;
var pwd=document.getElementById("pwd").value;
var umail=document.getElementById("umail").value;
var pno=document.getElementById("pno").value;
var patt=new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
if(uname.length<6)
{
alert("Enter name with 6 characters");
}
else
{
if(pwd.length<6)
{
alert("Password of length 6 is required");
}
else
{
if(patt.test(umail)!=true)
{
alert("Enter valid email");
}
else
{
if(pno.length!=10)
{
alert("Invalid phone number");
}
}
}
}
}