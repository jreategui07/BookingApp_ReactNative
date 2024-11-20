import { Button, StyleSheet } from 'react-native';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Views
import LoginScreen from './View/LoginScreen';
import DashboardScreen from './View/DashboardScreen';
import BookingScreen from './View/BookingScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const headerOptions = ({navigation}) => ({
    headerStyle: { backgroundColor: 'tomato' } ,
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold'},
    headerRight: () => (
      <Button title='Logout' onPress={ () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: "Dashboard"}]
          })
        )
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: "Login"}]
          })
        )
      }} />
    )
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Group screenOptions={headerOptions} >
          <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Booking' component={BookingScreen} options={{ headerShown: true }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
