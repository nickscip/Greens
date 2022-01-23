import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import data from '../components/CarouselPics';
import CustomSlider from '../components/CustomSlider';

function HomeScreen({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.topPageNavigator}>
        <Text style={{fontSize: 25, fontFamily: 'Times New Roman'}}>Events Near You</Text>
        <Pressable onPress={() => navigation.navigate('Events')}>
          <Text style={{textAlign: 'right', fontSize: 18, fontFamily: 'Arial'}}>More ></Text>
        </Pressable>
      </View>

      <View style={styles.eventBanner}>
        <CustomSlider data={data} />
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.lineDivider}>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 20, marginBottom: 20}}>
        <Pressable style={styles.homeButton}>
          <Image source={require('../../assets/Location.png')}/>
          <Text style={[styles.buttonText,{marginTop:5}]}>Find Art</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Image source={require('../../assets/Ticket.png')}/>
          <Text style={styles.buttonText}>My Tickets</Text>
        </Pressable>
      
        <Pressable style={[styles.homeButton, {paddingBottom:5}]}>
          <Image source={require('../../assets/Flag.png')}/>
          <Text style={styles.buttonText}>Upcoming Tours</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Pressable style={styles.homeButton}>
          <Image source={require('../../assets/Favorite.png')}/>
          <Text style={styles.buttonText}>My Favorites</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Image 
            source={require('../../assets/QrCode.png')}
          />
          <Text style={[styles.buttonText,{marginTop: 5}]}>QR Scanner</Text>
        </Pressable>
      
        <Pressable style={styles.homeButton}>
          <Image source={require('../../assets/Person.png')}/>
          <Text style={styles.buttonText}>My Profile</Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={[styles.lineDivider, {marginTop: 25}]}>
        </View>
      </View>

      <View style={styles.bottomPageNavigator}>
        <Text style={{fontSize: 25, fontFamily: 'Times New Roman'}}>Local Artists</Text>
        <Pressable>
          <Text style={{textAlign: 'right', fontSize: 18, fontFamily: 'Arial'}}>More ></Text>
        </Pressable>
      </View>

      
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', marginHorizontal: 15, marginTop: 10}}>
          <Pressable style={styles.artistButton}>
            <ImageBackground
              source={require('../../assets/Hunter.jpg')}
              style={{width: 100, height: 115}}
              imageStyle={{ borderRadius: 8, borderWidth: 1}}>
                <View style={{paddingLeft: 4, paddingTop: 95}}>
                  <Text style={styles.artistText}>Hunter Ash</Text>
                </View>
            </ImageBackground>
          </Pressable>
          <Pressable style={styles.artistButton}>
          <ImageBackground
              source={require('../../assets/Jason.jpg')}
              style={{width: 100, height: 115}}
              imageStyle={{ borderRadius: 8, borderWidth: 1}}>
                <View style={{paddingLeft: 4, paddingTop: 95}}>
                  <Text style={styles.artistText}>Jason Eatherly</Text>
                </View>
            </ImageBackground>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <ImageBackground
              source={require('../../assets/Ryan.jpg')}
              style={{width: 100, height: 115}}
              imageStyle={{ borderRadius: 8, borderWidth: 1}}>
                <View style={{paddingLeft: 4, paddingTop: 95}}>
                  <Text style={styles.artistText}>Ryan Runcie</Text>
                </View>
            </ImageBackground>
          </Pressable>
          <Pressable style={styles.artistButton}>
            <ImageBackground
              source={require('../../assets/Vy.jpg')}
              style={{width: 100, height: 115}}
              imageStyle={{ borderRadius: 8, borderWidth: 1}}>
                <View style={{paddingLeft: 4, paddingTop: 95}}>
                  <Text style={styles.artistText}>Vy Ngo</Text>
                </View>
            </ImageBackground>
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
    marginTop: 110,
    alignItems: 'flex-end'
  },

  eventBanner: {
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    paddingTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },

  lineDivider: {
    marginBottom: 10, 
    borderWidth: .75, 
    width: 240, 
    borderColor: '#1c8aff',
    backgroundColor: '#1c8aff'
  },
  
  homeButton: {
    backgroundColor: 'white',
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: .25

  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Times New Roman',
    color: 'black',
    textAlign: 'center',

  },

  bottomPageNavigator: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'flex-end'
  },

  artistButton: {
    backgroundColor: 'white',
    width: 100,
    height: 115,
    borderRadius: 8,
    marginHorizontal: 5
  },

  artistText:{
    color: 'white',
    fontSize: 13,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 2
  },
});

export default HomeScreen;