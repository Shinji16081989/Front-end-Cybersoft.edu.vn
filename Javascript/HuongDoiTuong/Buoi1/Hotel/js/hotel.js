var hotel = {
  name: 'CyberSoft',
  rooms: 50,
  roomRented: 30,
  checkRoomAvailability: function(){
    return this.rooms - this.roomRented;
  }
};
