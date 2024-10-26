import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const NoQuizzes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="error-outline" size={24} color="#8B5CF6" />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/noactive.png")}
      />
      <Text style={styles.title}>No Upcoming Quizzes</Text>
      <Text style={styles.subtitle}>
        You're all set for now! No quizzes are scheduled. Keep exploring and
        stay sharp!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Content</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default NoQuizzes;
