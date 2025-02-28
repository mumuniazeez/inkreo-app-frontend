import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';


const Files = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search files"
          placeholderTextColor="#B0B0B0"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.recentContainer}>
        <Text style={styles.recentContainerText}>Files</Text>
        <SimpleLineIcons name="grid" size={24} color="black" />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 10,
    shadowColor: '#000', // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    backgroundColor: '#E8E9EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    gap: 10,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  recentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentContainerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
  },
});


export default Files