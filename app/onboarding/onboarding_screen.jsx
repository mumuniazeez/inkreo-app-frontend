import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import SwipeableViews from "react-swipeable-views-native";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: require("../../assets/images/create-inspire-imagine.png"),
      title: "Write Easily Like Never Before",
      description: "Break free from writer's block and capture your ideas with ease. Experience a modern approach to writing that truly works for you.",
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      image: require("../../assets/images/Gemini_Generated_Image_acizopacizopaciz.png"),
      title: "Powered by AI & Templates",
      description: "Let our AI transform your raw ideas into compelling content.",
      backgroundColor: "#FFF",
    },
    {
      id: 3,
      image: require("../../assets/images/Gemini_Generated_Image_lm79v9lm79v9lm79.png"),
      title: "Replace Old Tools with Innovation",
      description: "A sleek, innovative writing experience—effortless and inspiring.",
      backgroundColor: "#FFF",
    },
  ];

  return (
    <View style={styles.container}>
      <SwipeableViews index={index} onChangeIndex={setIndex} resistance animateTransitions enableMouseEvents>
        {slides.map((slide) => (
          <View key={slide.id} style={[styles.slide, { backgroundColor: slide.backgroundColor }]}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </SwipeableViews>

      <View style={styles.pagination}>
  {slides.map((_, i) => (
    <View key={i} style={i === index ? styles.activeDot : styles.dot} />
  ))}
</View>


<View style={styles.bottomButtons}>
  <TouchableOpacity style={styles.skipButton} onPress={onFinish} accessibilityLabel="Skip Onboarding">
    <Text style={styles.skipText}>Skip</Text>
  </TouchableOpacity>
  
  <TouchableOpacity
    style={styles.nextButton}
    onPress={() => (index < slides.length - 1 ? setIndex(index + 1) : onFinish())}
    accessibilityLabel={index === slides.length - 1 ? "Get Started" : "Next Slide"}
  >
    <Text style={styles.nextText}>{index === slides.length - 1 ? "Get Started" : "Next"}</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  slide: { width, height, alignItems: "center", justifyContent: "center", paddingHorizontal: 10 },
  image: { width: width * 0.75, height: height * 0.38, resizeMode: "contain", marginBottom: 10 },
  title: { 
    fontSize: 26, 
    fontWeight: "700", 
    color: "#181818", 
    textAlign: "center", 
    marginTop: 20, 
    flexWrap: "wrap",
    width: "90%" // Ensures it wraps within a reasonable width
  },
  
  description: { 
    fontSize: 14.55, 
    color: "#4F4F4F", 
    textAlign: "center", 
    fontWeight: "500",
    marginTop: 10, 
    paddingHorizontal: 20, 
    flexWrap: "wrap", 
    width: "100%" // Ensures it wraps properly
  },
  pagination: { flexDirection: "row", justifyContent: "center", marginVertical: 50 },
dot: { 
  width: 6, 
  height: 6, 
  borderRadius: 4, 
  marginHorizontal: 5, 
  backgroundColor: "#D9D9D9", 
  transform: [{ rotate: "180deg" }] // Default rotation
},
activeDot: { 
  width: 28, 
  height: 6, 
  borderRadius: 20, 
  backgroundColor: "#E94560", 
  transform: [{ rotate: "180deg" }]
},

  bottomButtons: { flexDirection: "row", gap: 10, justifyContent: "space-between", paddingHorizontal: 50, marginBottom: 30 },
  skipText: { fontSize: 15, fontWeight: "700", color: "#000000" },
  skipButton: { 
    backgroundColor: "#FFF", 
    width: 149, 
    height: 54, 
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    borderRadius: 10, 
  },
  nextButton: { 
    backgroundColor: "#E63946", 
    width: 149, 
    height: 54, 
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    borderRadius: 10, 
  },
  
  nextText: { fontSize: 15, color: "#FFFFFF", fontWeight: "700", },
});

export default OnboardingScreen;
