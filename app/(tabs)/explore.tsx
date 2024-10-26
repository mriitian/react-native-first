import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons"; // For the navigation icons
import LoginScreen from "@/components/login";
import NoQuizzes from "@/components/active";

export default function ProfileScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ThemedView style={styles.container}>
      <View>{isLoggedIn ? <NoQuizzes /> : <LoginScreen />}</View>
      {/* Content */}
      <View style={styles.contentContainer}>{/* Scrollable content */}</View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BE00", // Header background color
    width: "100%",
    justifyContent: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
