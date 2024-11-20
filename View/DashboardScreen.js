import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
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
        placeholder='Student ID'
        value={studentID}
        onChangeText={setStudentID}
      />
      <TextInput
        style={styles.input}
        placeholder='Student Name'
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        style={styles.input}
        placeholder='Number of People'
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        keyboardType='numeric'
      />
      <Text style={styles.label}>Select Room Number:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={roomNumber}
          onValueChange={(itemValue) => setRoomNumber(itemValue)}
        >
          <Picker.Item label='Select a room' value='' />
          {availableRooms.map((room, index) => (
            <Picker.Item key={index} label={room} value={room} />
          ))}
        </Picker>
      </View>
      <Button title='Check Availability' onPress={navigateToBookingScreen} />
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default DashboardScreen;
