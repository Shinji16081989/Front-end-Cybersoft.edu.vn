
var hotelName = document.getElementById('TagName');
hotelName.innerHTML= hotel.name;
var checkRoom = document.getElementById('CheckRoomFree');
checkRoom.innerHTML = hotel.checkRoomAvailability();
