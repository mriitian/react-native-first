import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
// Import the image at the top

// Define a type for the items in your data array
type QuizItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  category: string;
  reward: string;
};

// Your data array with typed items
const data: QuizItem[] = [
  {
    id: "1",
    name: "Quiz Name",
    date: "10/09/2024",
    time: "10:00 am",
    category: "Category",
    reward: "Surprise Reward for Top 3 Winners",
  },
  {
    id: "2",
    name: "Quiz Name",
    date: "10/09/2024",
    time: "10:00 am",
    category: "Category",
    reward: "Surprise Reward for Top 3 Winners",
  },
  {
    id: "3",
    name: "Quiz Name",
    date: "10/09/2024",
    time: "10:00 am",
    category: "Category",
    reward: "Surprise Reward for Top 3 Winners",
  },
  {
    id: "4",
    name: "Quiz Name",
    date: "10/09/2024",
    time: "10:00 am",
    category: "Category",
    reward: "Surprise Reward for Top 3 Winners",
  },
];

export default function QuizCards() {
  // Define the type of `item` in `renderItem`
  const renderItem = ({ item }: { item: QuizItem }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {/* Use the imported icon here */}
        <Image
          source={require("../assets/images/devices.png")}
          style={styles.icon}
        />
        {/* Use source prop */}
        <View style={styles.infoContainer}>
          <Text style={styles.quizName}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <Text style={styles.dateTime}>
          {item.date} {"\n"}
          {item.time}
        </Text>
      </View>
      <Text style={styles.rewardText}>{item.reward}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#fff000", // Fixed color format
  },
  infoContainer: {
    flex: 1,
  },
  quizName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  category: {
    color: "gray",
    fontSize: 14,
  },
  dateTime: {
    textAlign: "right",
    fontSize: 14,
    color: "gray",
  },
  rewardText: {
    fontSize: 14,
    color: "gray",
    paddingLeft: 50,
  },
});
