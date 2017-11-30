var temp = prompt(" Vui Long Nhap nhiet do? ")

if (temp >= 50) {
  console.log("Nhiet do qua nong");
}else if (temp <= 50 && temp >= 32 ){
  console.log("Nhiet do van con nong");
}else if (temp <= 32 && temp > 26){
  console.log("Nhiet do binh thuong");
}else if(temp <= 26 && temp >= 20){
  console.log("Nhiet do mat me");
}else if (temp <= 20 && temp >= 10){
  console.log("Nhiet do kha lanh");
}else if (temp <= 10){
  console.log("Nhiet do qua lanh");
} else {
  console.log("Nhiet do khong the tinh");
}
