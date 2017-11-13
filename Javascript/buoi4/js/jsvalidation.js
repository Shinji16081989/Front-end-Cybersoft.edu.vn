function CheckInput()
{
  var uid = document.getElementById('userID');
  var pw = document.getElementById('passWord');
  var name = document.getElementById('yourName');
  var adress = document.getElementById('Adress');
  var country = document.getElementById('Country');
  var zip =  document.getElementById('zipCode');
  var men = document.getElementById('msex');
  var women =  document.getElementById('fsex');

  if checkNamelength(uid, 5, 12){
  }
  return false;
}

function checkNamelength(uid, minlength, maxlength)
{
  var userlength = uid.value;
  var min = minlength;
  var max =  maxlength;

  if (checkNamelength < minlength || userlength > maxlength) {
    alert("vui long nhap nhieu hon " + min + " ky tu va nhieu hon " + max " ky tu");
    return false;
    uid.focus();
  }
  return true;
}
