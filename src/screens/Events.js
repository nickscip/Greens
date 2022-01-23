import React from 'react';
import { Text, StyleSheet, Pressable, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

function EventsScreen({navigation}) {
    return(
    <React.Fragment>
      <View style={styles.topPageNavigator}>
        <Text style={{fontSize: 25, fontFamily: 'Times New Roman'}}>Events Near You</Text>
      </View>
      <View style={styles.eventSorter}>
        <Text style={{fontSize: 16, fontFamily: 'Arial'}}>Sort By </Text>
        <Icon name='downcircleo' size={16} color='black'/>
        <Text style={{fontSize: 16, fontFamily: 'Arial', paddingLeft: 30}}>Search...</Text>
      </View>
      <ScrollView>
      <View style={[styles.events, {marginTop: 15}]}>
          <Image source={require("../../assets/AST.png")} resizeMode="cover" style={styles.eventImages}/>
      </View>
      <View style={styles.events}>
          <Image source={require("../../assets/Mirrors.png")} resizeMode="cover" style={styles.eventImages}/>
      </View>
      <View style={styles.events}>
          <Image source={require("../../assets/Alchemy.png")} resizeMode="cover" style={styles.eventImages}/>
      </View>
      <View style={styles.events}>
          <Image source={require("../../assets/Flourish.png")} resizeMode="cover" style={styles.eventImages}/>
      </View>
      <View style={styles.events}>
          <Image source={require("../../assets/Nightbloom.png")} resizeMode="cover" style={styles.eventImages}/>
      </View>
      </ScrollView>
    </React.Fragment>
    )
};

const styles = StyleSheet.create({
    
    topPageNavigator: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 100,
        alignItems: 'flex-end'
    },
    eventSorter: {
        marginTop: 15,
        marginLeft: 30,
        flexDirection: 'row'
    },
    events: {
        alignItems: "center",
        marginVertical: 8,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    eventImages: {
        width: 380,
        borderRadius: 15
    }
});

export default EventsScreen;