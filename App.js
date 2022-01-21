import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Events from './src/screens/Events';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SMART APP">
        <Stack.Screen name="SMART APP" component={HomeScreen} />
        <Stack.Screen name="Events" component={Events} options={{ title: 'SMART APP' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;