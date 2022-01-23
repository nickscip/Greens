import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EventsScreen from './src/screens/Events';
import Logo from './src/components/Logo';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <Logo/>, headerTransparent: true}}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ headerTitle: (props) => <Logo/>, headerTransparent: true, headerBackVisible: true, headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;