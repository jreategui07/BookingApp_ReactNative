import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const navigateToBookingScreen = () => {
    if (studentID && studentName && numberOfPeople && roomNumber) {
      navigation.navigate('Booking', {
        studentID,
        studentName,
        numberOfPeople: parseInt(numberOfPeople),
        roomNumber,
      });
    } else {
      alert('Please fill in all the fields.');
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
      <TextInput
        style={styles.input}
        placeholder='Room Number (e.g., A101)'
        value={roomNumber}
        onChangeText={setRoomNumber}
      />
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
});

export default DashboardScreen;
