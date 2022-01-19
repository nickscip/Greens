import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View>
          <Pressable style={styles.homeButton}>
            <Text style={styles.buttonText}>Find Art</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.homeButton}>
            <Text style={styles.buttonText}>My Tickets</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.homeButton}>
            <Text style={styles.buttonText}>Upcoming Tours</Text>
          </Pressable>
        </View>
      </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SMART APP" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: 'pink',
    borderWidth: 1,
    width: 100,
    height: 100


  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: 'black',

  },
});