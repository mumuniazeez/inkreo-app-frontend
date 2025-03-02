import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  CategoryButtons,
  SearchBar,
  RecentDocuments,
  BlogPost,
  Proposal,
} from "@components";

const Templates = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          <SearchBar
            placeholder="Search templates"
            showSimpleSearchBar={true}
          />
        </View>
        <View style={styles.recentContainer}>
          <Text style={styles.recentContainerText}>Blog Post</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ color: "#808080DE" }}>View All</Text>
            <Entypo name="chevron-right" size={26} color="#808080DE" />
          </TouchableOpacity>
        </View>
        <BlogPost />

        <View style={styles.recentContainer}>
          <Text style={styles.recentContainerText}>Proposal</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ color: "#808080DE" }}>View All</Text>
            <Entypo name="chevron-right" size={26} color="#808080DE" />
          </TouchableOpacity>
        </View>
        <Proposal />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 200,
    margin: 10,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  recentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentContainerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },

  createButton: {
    flexDirection: "row",
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#E94560", // Pink background
    width: 90,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  createText: {
    fontSize: 16,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Templates;
