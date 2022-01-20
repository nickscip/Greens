import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';

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

export default HomeScreen;