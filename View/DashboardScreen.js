import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BookingViewModel from '../ViewModel/BookingViewModel';

const DashboardScreen = ({ navigation }) => {
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const bookingViewModel = new BookingViewModel();

  useEffect(() => {
    const rooms = bookingViewModel.getAvailableRooms();
    setAvailableRooms(rooms.map(room => room.roomNumber));
  }, []);

  const navigateToBookingScreen = () => {
    if (studentID && studentName && numberOfPeople && roomNumber) {
      navigation.navigate('Booking', {
        studentID,
        studentName,
        numberOfPeople: parseInt(numberOfPeople, 10),
        roomNumber,
      });
    } else {
      Alert.alert('Error', 'Please fill in all the fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Study Room</Text>
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentID}
        onChangeText={setStudentID}
      />
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Select Room Number:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={roomNumber}
          onValueChange={(itemValue) => setRoomNumber(itemValue)}
        >
          <Picker.Item label="Select a room" value="" />
          {availableRooms.map((room, index) => (
            <Picker.Item key={index} label={room} value={room} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToBookingScreen}>
        <Text style={styles.buttonText}>Check Availability</Text>
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
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


export default DashboardScreen;
