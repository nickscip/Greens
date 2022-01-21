import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet, ScrollView } from 'react-native';

function HomeScreen() {
  return (
    <React.Fragment>
      <View style={styles.topPageNavigator}>
        <Text style={{fontSize: 20, fontFamily: 'Times New Roman'}}>Events Near You</Text>
        <Pressable>
          <Text style={{textAlign: 'right', fontSize: 15, fontFamily: 'Times New Roman'}}>More ></Text>
        </Pressable>
      </View>

      <View style={styles.eventBanner}>
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.lineDivider}>
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
        <View style={styles.lineDivider}>
        </View>
      </View>

      <View style={styles.bottomPageNavigator}>
        <Text style={{fontSize: 20, fontFamily: 'Times New Roman'}}>Local Artists</Text>
        <Pressable>
          <Text style={{textAlign: 'right', fontSize: 15, fontFamily: 'Times New Roman'}}>More ></Text>
        </Pressable>
      </View>

      
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', marginHorizontal: 15, marginTop: 10}}>
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
  topPageNavigator: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100
  },

  eventBanner: {
    marginHorizontal: 20, 
    flexDirection: 'row', 
    marginTop: 10, 
    borderWidth: 1, 
    backgroundColor: 'white', 
    height: 130, 
    borderRadius: 8
  },

  lineDivider: {
    marginTop: 50,
    marginBottom: 10, 
    borderWidth: .75, 
    width: 240, 
    borderColor: '#1c8aff'
  },
  
  homeButton: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: .25

  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'center',

  },

  bottomPageNavigator: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
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