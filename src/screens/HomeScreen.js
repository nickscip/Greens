import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet, ScrollView } from 'react-native';

function HomeScreen() {
  return (
    <React.Fragment>
      <View style={{marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={{fontSize: 20}}>Events Near You</Text>
        <Pressable>
          <Text style={{textAlign: 'right', fontSize: 15}}>More ></Text>
        </Pressable>
      </View>

      <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 10, borderWidth: 1, backgroundColor: 'white', height: 130, borderRadius: 8}}>
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 50, marginBottom: 10, borderWidth: .75, width: 240, borderColor: '#1c8aff'}}>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 20, marginBottom: 20}}>
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>Find Art</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>My Tickets</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>Upcoming Tours</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>My Favorites</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>QR Scanner</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Text style={styles.buttonText}>My Profile</Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 50, marginBottom: 10, borderWidth: .75, width: 240, borderColor: '#1c8aff'}}>
        </View>
      </View>

      <View style={{marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20}}>Local Artists</Text>
        <Pressable>
          <Text style={{textAlign: 'right', fontSize: 15}}>More ></Text>
        </Pressable>
      </View>

      
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', marginHorizontal: 15}}>
          <Pressable style={styles.artistButton}>
            <Text></Text>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <Text></Text>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <Text></Text>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <Text></Text>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <Text></Text>
          </Pressable>
        </View>
      </ScrollView>

    </React.Fragment>  
    
  );
}

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: 'pink',
    borderWidth: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 8

  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'center',

  },
  artistButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5
  },
});

export default HomeScreen;