import Active from "@/components/active";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome } from "@expo/vector-icons"; // For the navigation icons
import QuizCards from "@/components/upcoming";
import NoQuizzes from "@/components/active";

type Tab = {
  key: string;
  title: string;
};

type TabsProps = {
  tabs: Tab[];
  onTabPress: (tabKey: string) => void;
  activeTab: string;
};

export default function SearchPage() {
  const [activeTab, setActiveTab] = React.useState<string>("upcoming");
  const [isFocused, setIsFocused] = useState(false);

  const tabs: Tab[] = [
    { key: "active", title: "Active" },
    { key: "upcoming", title: "Upcoming" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "active":
        return <NoQuizzes />;
      case "upcoming":
        return <QuizCards />;
      default:
        return null;
    }
  };

  const [searchText, setSearchText] = useState("");

  const handleTabPress = (tabKey: string) => {
    setActiveTab(tabKey);
    setSearchText(""); // Clear search text when switching tabs
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <ThemedText style={styles.headerText} type="title">
          Upcoming Quizzes
        </ThemedText>
        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <FontAwesome name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <FontAwesome name="search" size={18} color="black" />
        <TextInput
          style={[styles.searchBar, isFocused && styles.noFocusBorder]}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {/* Tabs Section */}
      <Tabs tabs={tabs} onTabPress={setActiveTab} activeTab={activeTab} />

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderContent()}
      </ScrollView>
    </ThemedView>
  );
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabPress, activeTab }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[
            styles.tab,
            activeTab === tab.key ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => onTabPress(tab.key)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.key
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}
          >
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BE00", // Header background color
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
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
    padding: 16,
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
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
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
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  viewAllText: {
    color: "white",
    fontWeight: "bold",
  },
  storyContainer: {},
  postContainer: {},
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#F5BE00",
    borderRadius: 10,
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#F5BE00",
  },
  inactiveTab: {
    borderBottomWidth: 0,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#000",
  },
  inactiveTabText: {
    color: "#666",
  },
  searchBox: {
    paddingHorizontal: 12,
    gap: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 25,
    borderRadius: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff",
  },
  noFocusBorder: {
    borderWidth: 0, // Removes border on focus
  },
});
