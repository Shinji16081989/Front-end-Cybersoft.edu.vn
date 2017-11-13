function kiemTraNhap() {
  //var inputTen = document.forms["form1"]["username"];
  var inputTen = document.form1.username;
  var giatriTen = inputTen.value;
  var theP = document.getElementById('thongbao')
  if (giatriTen == "") {
    //alert("Nhap vao mot gia tri");
    theP.style.display = " block";
    theP.innerHTML = " Hay Nhap vao mot gia tri";
    theP.style.color = "red";
    return false;
  } else {
    //alert("Ban da nhap dung roi, cam on");
    theP.style.display = " none";
    theP.innerHTML = "Ban nhap dung roi, cam on";
    theP.style.color = "green";
    return true;
  }
}

function KiemtraTatCaKytu(idTag) {
  //var inputTen = document.forms["form1"]["username"];
  var inputTag = document.getElementById(idTag);
  var letters = /^[A-Za-z]+$/;
  var theP = document.getElementById('thongbao1')
  if (inputTag.value.match(letters)) {
    //alert("Nhap vao mot gia tri");
    theP.style.display = "none";
    return true;
  } else {
    //alert("Ban da nhap dung roi, cam on");
    theP.style.display = " block";
    theP.innerHTML = "hay Nhap tat ca la ky tu";
    theP.style.color = "green";
    return false;
  }
}

function KiemtraTatCalaSo(idTag) {
  //var inputTen = document.forms["form1"]["username"];
  var inputTag = document.getElementById(idTag);
  var number = /^[0-9]+$/;
  var theP = document.getElementById('thongbao2')
  if (inputTag.value.match(number)) {
    //alert("Nhap vao mot gia tri");
    theP.style.display = "none";
    return true;
  } else {
    //alert("Ban da nhap dung roi, cam on");
    theP.style.display = " block";
    theP.innerHTML = "Hay Nhap tat ca la Number";
    theP.style.color = "green";
    return false;
  }
}

function KiemtraEmail(idTag) {
  //var inputTen = document.forms["form1"]["username"];
  var inputTag = document.getElementById(idTag);
  var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
  var theP = document.getElementById('thongbao3')
  if (inputTag.value.match(email)) {
    //alert("Nhap vao mot gia tri");
    theP.style.display = "none";
    return true;
  } else {
    //alert("Ban da nhap dung roi, cam on");
    theP.style.display = " block";
    theP.innerHTML = "vui long nhap email hop le";
    theP.style.color = "green";
    return false;
  }
}

function KiemtraDoDai(idTxt, minlength, maxlength) {
  //var inputTen = document.forms["form1"]["username"];
  var inputText = document.getElementById(idTxt);
  var field = inputText.value;
  var theP = document.getElementById('thongbao4');
  if (field.length < minlength || field.length > maxlength) {
    //alert("Nhap vao mot gia tri");
    theP.style.display = " block";
    theP.innerHTML = "vui long do dai nhat dinh tu " + minlength + " den " + maxlength;
    theP.style.color = "red";
    return false;
  } else {
    //alert("Ban da nhap dung roi, cam on");
    theP.style.display = "none";
    return true;
  }
}
