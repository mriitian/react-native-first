import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const PostItem = ({ imageUrl, caption, likes, comments }) => {
  return (
    <View style={styles1.postItem}>
      {/* Post Image */}
      <Image source={{ uri: imageUrl }} style={styles1.image} />

      {/* Post Caption */}
      <View style={styles1.captionContainer}>
        <ThemedText style={styles1.captionText}>{caption}</ThemedText>
      </View>

      {/* Post Stats */}
      <View style={styles1.statsContainer}>
        <ThemedText style={styles1.likesText}>{likes} likes</ThemedText>
        <ThemedText style={styles1.commentsText}>
          {comments} comments
        </ThemedText>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  postItem: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  captionContainer: {
    padding: 10,
  },
  captionText: {
    fontWeight: "bold",
  },
  statsContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likesText: {
    color: "#333",
  },
  commentsText: {
    color: "#333",
  },
});
