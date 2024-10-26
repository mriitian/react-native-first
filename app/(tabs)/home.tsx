import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons"; // For the navigation icons

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome name="mobile" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", gap: 20 }}>
          <FontAwesome name="bell" size={24} color="white" />
          <FontAwesome name="bookmark" size={24} color="white" />
          <FontAwesome name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.storyContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Announcements
            </Text>
            <ScrollView
              horizontal
              contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: 10,
              }}
            >
              <Image source={require("../../assets/images/stories/1.png")} />
              <Image source={require("../../assets/images/stories/2.png")} />
              <Image source={require("../../assets/images/stories/3.png")} />
              <Image source={require("../../assets/images/stories/4.png")} />
              <Image source={require("../../assets/images/stories/5.png")} />
              <Image source={require("../../assets/images/stories/5.png")} />
              <Image source={require("../../assets/images/stories/5.png")} />
            </ScrollView>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Posts</Text>
            <View style={{ marginTop: 10 }}>
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

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
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView's content takes up all available space
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-start",
  },
  storyContainer: {},
  postContainer: {},
});

const PostItem = () => {
  return (
    <View style={styles1.postItem}>
      {/* Username and Options */}
      <View style={styles1.topPostBar}>
        <Image
          source={require("../../assets/images/stories/1.png")}
          style={styles1.profileImage}
        />
        <Text style={styles1.usernameText}>alexjames</Text>
        <FontAwesome
          name="ellipsis-v"
          size={16}
          color="gray"
          style={styles1.optionsIcon}
        />
      </View>

      {/* Post Image */}
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles1.image}
      />

      {/* Caption with 'more' */}
      <View style={styles1.captionContainer}>
        <Text style={styles1.captionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et ...
          <Text style={styles1.moreText}>more</Text>
        </Text>
      </View>

      {/* Actions */}
      <View style={styles1.actionsContainer}>
        <FontAwesome
          name="thumbs-up"
          size={18}
          color="gray"
          style={styles1.actionIcon}
        />
        <FontAwesome
          name="comment"
          size={18}
          color="gray"
          style={styles1.actionIcon}
        />
        <FontAwesome
          name="share"
          size={18}
          color="gray"
          style={styles1.actionIcon}
        />
        <FontAwesome
          name="bookmark-o"
          size={18}
          color="gray"
          style={styles1.bookmarkIcon}
        />
      </View>

      {/* Tags */}
      <View style={styles1.tagsContainer}>
        <Text style={styles1.tag}>Design</Text>
        <Text style={styles1.tag}>Persona</Text>
        <Text style={styles1.tag}>User Flow</Text>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  postItem: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  topPostBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  usernameText: {
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  optionsIcon: {
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },
  captionContainer: {
    paddingVertical: 8,
  },
  captionText: {
    color: "#333",
    lineHeight: 20,
  },
  moreText: {
    color: "#888",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  actionIcon: {
    marginHorizontal: 10,
  },
  bookmarkIcon: {
    marginLeft: "auto",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  tag: {
    backgroundColor: "#F5F5DC",
    color: "#333",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 12,
  },
});
