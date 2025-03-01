import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome, FontAwesome6 } from '@expo/vector-icons'; // Import the necessary icons

// Categories Data
const categories = [
  { name: 'Blog Post', icon: 'file-pen', iconName: 'FontAwesome6', bgColor: '#6A5ACD' },
  { name: 'Research', icon: 'search', iconName: 'Ionicons', bgColor: '#FF6347' },
  { name: 'Proposal', icon: 'file-text', iconName: 'FontAwesome', bgColor: '#20B2AA' },
  { name: 'Script', icon: 'movie-open', iconName: 'MaterialCommunityIcons', bgColor: '#FF4500' },
  { name: 'Resume', icon: 'description', iconName: 'MaterialIcons', bgColor: '#4682B4' },
];

// Function to return the right icon component
const getIconComponent = (iconName, icon, size, color) => {
  switch (iconName) {
    case 'FontAwesome6':
      return <FontAwesome6 name={icon} size={size} color={color} />;
      case 'Ionicons':
      return <Ionicons name={icon} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={icon} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={icon} size={size} color={color} />;
    case 'FontAwesome':
      return <FontAwesome name={icon} size={size} color={color} />;
    default:
      return null; // Handle if no matching icon is found
  }
};

const CategoryButtons = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((category, index) => (
        <View key={index}>
          <TouchableOpacity style={[styles.categoryButton, { backgroundColor: category.bgColor }]}>
            {/* Dynamically render the correct icon */}
            {getIconComponent(category.iconName, category.icon, 24, 'white')}
          </TouchableOpacity>
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  categoryButton: {
    width: 60,
    height: 60,
    borderRadius: 35, // Circular shape
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },
});

export default CategoryButtons;
