import React from "react";
import {TextInput, StyleSheet, FlatList} from "react-native";

const item = [
    {name: 'AST', source: require("../../assets/AST.png")},
    {name: 'Mirrors', source: require("../../assets/Mirrors.png")},
    {name: 'Alchemy', source: require("../../assets/Alchemy.png")},
    {name: 'Fluorish', source: require("../../assets/Flourish.png")},
    {name: 'Nightbloom', source: require("../../assets/Nightbloom.png")}
]

const EventList = {
    return(
    <SafeAreaView>
        <FlatList
        data = {}
        keyExtractor={item=>item.name}
        renderItem = {({item}) => {
            return (
                <View style={styles.events}><Image source={item.source} style={styles.eventImages} /></View>
            );
        }}
        />
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    eventImages: {
        width: 380,
        borderRadius: 15
    },
})

export default EventList;