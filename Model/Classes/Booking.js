class Booking {
  constructor(studentID, studentName, numberOfPeople, selectedRoom) {
    this.studentID = studentID;
    this.studentName = studentName;
    this.numberOfPeople = numberOfPeople;
    this.selectedRoom = selectedRoom;
  }

  checkAvailability = () => {
    if (this.selectedRoom.available && this.numberOfPeople <= this.selectedRoom.capacity) {
      console.log(`Room ${this.selectedRoom.roomNumber} is available for ${this.numberOfPeople} people.`);
      return true;
    }
    if (!this.selectedRoom.available) {
      console.log(`Room ${this.selectedRoom.roomNumber} is not available.`);
      return false;
    }
    console.log(`Room ${this.selectedRoom.roomNumber} cannot accommodate ${this.numberOfPeople} people.`);
    return false;
  };
}

export default Booking
