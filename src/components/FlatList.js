import React, {useState} from 'react';
import { Text, StyleSheet, Pressable, View, Image, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from '../components/SearchBar';


const EventList( {term, onTermChange} ) {

    const eventList =  [
        {name: 'AST', source: require("../../assets/AST.png")},
        {name: 'Alchemy', source: require("../../assets/Mirrors.png")},
        {name: 'Mirrors', source: require("../../assets/Alchemy.png")},
        {name: 'Flourish', source: require("../../assets/Flourish.png")},
        {name: 'Nightbloom', source: require("../../assets/Nightbloom.png")},
    ]

    const [term, setTerm] = useState('');
    
    return(
    <React.Fragment>            
        <View style={[styles.events, {marginTop: 15}]}>
            <SafeAreaView>
                <FlatList
                    data={eventList}
                    renderItem={({item})=><Image source= {item.source} style={styles.eventImages}/>}
                    keyExtractor={item=>item.name}
                />
            </SafeAreaView>
        </View>
    </React.Fragment>
    )
};

const styles = StyleSheet.create({

    events: {
        alignItems: "center",
        marginVertical: 8,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    eventImages: {
        width: 380,
        borderRadius: 15,
        marginVertical: 8,
    }
});

export default EventsScreen;