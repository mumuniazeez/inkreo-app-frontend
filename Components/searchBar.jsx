import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Octicons name="three-bars" size={20} color="black" />
      <TextInput
        placeholder="Search documents, templates ..."
        placeholderTextColor="#B0B0B0"
        style={styles.searchInput}
      />
      <Image source={require('../assets/images/user.png')} style={styles.userIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 15,
    paddingVertical: 2,
    margin: 10,
    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
  },
  searchIcon: {
    marginRight: 10, // Spacing between icon and input
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
        resizeMode: 'contain',
    },
});


export default SearchBar;
