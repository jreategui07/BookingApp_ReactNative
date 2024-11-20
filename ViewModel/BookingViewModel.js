import { rooms } from '../Model/Data/Mock/rooms';
import { bookings } from '../Model/Data/Mock/bookings';

class BookingViewModel {
  constructor() {
    this.bookings = [];
    this.rooms = [];
    this.loadData()
  }

  loadData() {
    this.bookings = bookings;
    this.rooms = rooms;
    console.log("Mock data loaded successfully.");
  }

  getAvailableRooms() {
    return this.rooms.filter(room => room.available);
  }

  checkRoomAvailability(roomNumber, numberOfPeople) {
    const room = this.rooms.find(r => r.roomNumber === roomNumber);
    if (!room) {
      console.log("Room does not exist.");
      return false;
    }
    if (!room.available) {
      console.log(`Room ${roomNumber} is not available.`);
      return false;
    }
    if (numberOfPeople > room.capacity) {
      console.log(`Room ${roomNumber} cannot accommodate ${numberOfPeople} people.`);
      return false;
    }
    return true;
  }

  createBooking(studentID, studentName, roomNumber, numberOfPeople) {
    if (this.checkRoomAvailability(roomNumber, numberOfPeople)) {
      this.bookings.push({
        studentID,
        studentName,
        roomNumber,
        numberOfPeople,
      });
      console.log("Booking successful!");
      return true;
    } else {
      console.log("Booking failed.");
      return false;
    }
  }

  getBookingsByStudentID(studentID) {
    return this.bookings.filter(booking => booking.studentID === studentID);
  }

  cancelBooking(studentID, roomNumber) {
    const index = this.bookings.findIndex(
      booking => booking.studentID === studentID && booking.roomNumber === roomNumber
    );
    if (index !== -1) {
      this.bookings.splice(index, 1);
      console.log("Booking canceled successfully.");
      return true;
    } else {
      console.log("Booking not found.");
      return false;
    }
  }
}

export default BookingViewModel;
