import React from "react";
import {TextInput, StyleSheet, View} from "react-native";

const SearchBar = ( {term, onTermChange} ) => {
    return(
        <TextInput
            style = {styles.searchBar}
            placeholder = "Search..."
            value = {term}
            onChangeText = {newTerm => onTermChange(newTerm)}
        />
    )
};

const styles = StyleSheet.create({
    searchBar: {
        fontSize: 16,
        fontFamily: 'Arial',
        paddingLeft: 30
    }
});

export default SearchBar;