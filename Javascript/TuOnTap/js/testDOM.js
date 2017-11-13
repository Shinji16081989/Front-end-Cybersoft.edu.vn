function LayGiaTri()
{
  var theP = document.getElementById('noidung');
  theP.innerHTML = "xin chao myclass.vn";
  theP.style.color = "red";
}

function layGiaTriTheP2()
{
  var tatcaP = document.getElementsByTagName('p');
  alert("So the P: " + tatcaP.length + " Noi Dung The P : " + tatcaP[2].innerHTML);
}

function layGiatriClass()
{
  var giaTriClass = document.getElementsByClassName('demo');
  alert("Gia tri cua Class" + giaTriClass.length + " Noi Dung class :" + giaTriClass[0].innerHTML)
}


function tinhTong(){
  var a = document.getElementById('soa');
  var b = document.getElementById('sob');
  var ketqua = document.getElementById('kq');

  // Nan, if input is not a number alert .
  if (isNaN(a.value) || isNaN(b.value)){
    alert("vui long nhap so nguyen");
    return false;
  }else{
    var IntA = parseInt(a.value);
    var IntB = parseInt(b.value);
    var tong = IntA + IntB;
    ketqua.value =  tong;
    return true;
  }
}
