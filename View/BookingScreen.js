import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BookingViewModel from '../ViewModel/BookingViewModel';

const BookingScreen = ({ route, navigation }) => {
  const { studentID, studentName, numberOfPeople, roomNumber } = route.params;
  const bookingVM = new BookingViewModel();

  const handleCheckAvailability = () => {
    const isAvailable = bookingVM.checkRoomAvailability(roomNumber, numberOfPeople);
    if (isAvailable) {
      bookingVM.createBooking(studentID, studentName, roomNumber, numberOfPeople);
      alert(`Room ${roomNumber} is booked successfully!`);
    } else {
      alert(`Room ${roomNumber} is not available or cannot accommodate ${numberOfPeople} people.`);
    }
  };

  const handleCancel = () => {
    if (navigation.canGoBack()){
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Room Availability</Text>
      <Text>Student ID: {studentID}</Text>
      <Text>Student Name: {studentName}</Text>
      <Text>Number of People: {numberOfPeople}</Text>
      <Text>Room Number: {roomNumber}</Text>
      <Button title='Confirm Booking' onPress={handleCheckAvailability} />
      <Button title="Cancel" onPress={handleCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default BookingScreen;
