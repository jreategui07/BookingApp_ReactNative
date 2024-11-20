import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import BookingViewModel from '../ViewModel/BookingViewModel';

const BookingScreen = ({ route, navigation }) => {
  const { studentID, studentName, numberOfPeople, roomNumber } = route.params;
  const bookingVM = new BookingViewModel();

  const handleCheckAvailability = () => {
    const isAvailable = bookingVM.checkRoomAvailability(roomNumber, numberOfPeople);
    if (isAvailable) {
      bookingVM.createBooking(studentID, studentName, roomNumber, numberOfPeople);
      Alert.alert('Success', `Room ${roomNumber} is booked successfully!`);
      navigation.goBack();
    } else {
      Alert.alert('Error', `Room ${roomNumber} is not available or cannot accommodate ${numberOfPeople} people.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Booking Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Student ID:</Text>
        <Text style={styles.value}>{studentID}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Student Name:</Text>
        <Text style={styles.value}>{studentName}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Number of People:</Text>
        <Text style={styles.value}>{numberOfPeople}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Room Number:</Text>
        <Text style={styles.value}>{roomNumber}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCheckAvailability}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
