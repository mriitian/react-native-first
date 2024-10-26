import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons"; // For the navigation icons

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <ThemedText style={styles.headerText} type="title">
          Quiz
        </ThemedText>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <ThemedText style={styles.statText} type="subtitle">
                20
              </ThemedText>
              <ThemedText style={styles.statLabel}>World Ranking</ThemedText>
            </View>
            <View style={styles.statBox}>
              <ThemedText style={styles.statText} type="subtitle">
                12000
              </ThemedText>
              <ThemedText style={styles.statLabel}>Points earned</ThemedText>
            </View>
          </View>

          <View style={styles.quizInfoContainer}>
            <ThemedText style={styles.quizTitle}>LAST QUIZ</ThemedText>
            <ThemedText style={styles.quizDetails}>UI/UX Design</ThemedText>
            <ThemedText style={styles.quizPoints}>Points: 150</ThemedText>
            <ThemedText style={styles.rankText}>🏅 Rank: 1</ThemedText>
          </View>

          {/* Featured Section */}
          <View style={styles.featuredContainer}>
            <ThemedText style={styles.featuredTitle}>FEATURED</ThemedText>
            <ThemedText style={styles.featuredText}>
              Amazing Quizzes lined up for you all in Upcoming Months
            </ThemedText>
            <TouchableOpacity style={styles.notifyButton}>
              <ThemedText style={styles.notifyButtonText}>
                Turn on Notifications
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* View All Quizzes Button */}
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>View All Quizzes</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </View>
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
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView's content takes up all available space
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-start",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#082B4D", // Dark blue background
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statBox: {
    alignItems: "center",
  },
  statText: {
    color: "white",
    fontSize: 20,
  },
  statLabel: {
    color: "white",
    fontSize: 14,
  },
  quizInfoContainer: {
    backgroundColor: "#F5BE00",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  quizTitle: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  quizDetails: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  quizPoints: {
    color: "white",
    fontSize: 14,
  },
  rankText: {
    color: "white",
    fontSize: 14,
  },
  featuredContainer: {
    backgroundColor: "#082B4D",
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  featuredTitle: {
    color: "yellow",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  featuredText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
    fontWeight: 600,
  },
  notifyButton: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  notifyButtonText: {
    color: "#082B4D",
    fontWeight: "bold",
  },
  viewAllButton: {
    backgroundColor: "#F5BE00",
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  viewAllText: {
    color: "white",
    fontWeight: 600,
    fontSize: 24,
  },
});
