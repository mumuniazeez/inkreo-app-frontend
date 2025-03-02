import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Image, Keyboard } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { MaterialIcons } from "@node_modules/@expo/vector-icons/build/Icons";

const SearchBar = ({ placeholder, showSimpleSearchBar }) => {
  return showSimpleSearchBar ? (
    <View
      style={[
        styles.searchBarContainer,
        { paddingHorizontal: 15, paddingVertical: 2 },
      ]}
    >
      <TextInput
        placeholder="Search files"
        placeholderTextColor="#B0B0B0"
        style={styles.searchInput}
      />
      <MaterialIcons name="filter-list" size={26} color="black" />
    </View>
  ) : (
    <View style={styles.searchBarContainer}>
      <Octicons
        name="three-bars"
        size={20}
        color="black"
        style={{ marginLeft: 15, marginRight: 10 }}
      />
      <TextInput
        placeholder={placeholder || "Search documents, templates ..."}
        placeholderTextColor="#B0B0B0"
        style={styles.searchInput}
      />
      <Image
        source={require("../assets/images/user.png")}
        style={styles.userIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    resizeMode: "contain",
  },
});

export default SearchBar;
