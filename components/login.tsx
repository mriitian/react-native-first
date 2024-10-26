import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons"; // For icons

export default function LoginScreen() {
  const [activeTab, setActiveTab] = useState("username");

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <FontAwesome name="scaleUp" size={48} color="white" />
        <ThemedText style={styles.welcomeText}>Welcome Back..!</ThemedText>
        <ThemedText style={styles.subTitle}>
          Unlock Focused, Distraction-free Learning
        </ThemedText>
      </View>

      {/* Tab Selection */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "username" && styles.activeTab]}
          onPress={() => setActiveTab("username")}
        >
          <ThemedText style={styles.tabText}>Username</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "mobile" && styles.activeTab]}
          onPress={() => setActiveTab("mobile")}
        >
          <ThemedText style={styles.tabText}>Mobile No</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Login Form */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TextInput
          style={styles.input}
          placeholder={
            activeTab === "username" ? "Username/Email" : "Mobile Number"
          }
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
          secureTextEntry
        />
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <ThemedText style={styles.rememberMeText}>Remember me</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedText style={styles.forgotPassword}>
              Forgot Password?
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <ThemedText style={styles.loginButtonText}>Login</ThemedText>
        </TouchableOpacity>

        {/* Alternative Login */}
        <View style={styles.socialLoginContainer}>
          <ThemedText style={styles.orText}>Or continue with</ThemedText>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign up Link */}
        <View style={styles.signUpContainer}>
          <ThemedText style={styles.noAccountText}>
            Don't have an account?{" "}
            <ThemedText style={styles.signUpText}>Sign up</ThemedText>
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5BE00", // Background color similar to header
    padding: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  welcomeText: {
    color: "#082B4D",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  subTitle: {
    color: "#082B4D",
    fontSize: 14,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  tab: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#F5BE00",
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    color: "#082B4D",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  input: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rememberMeText: {
    color: "#082B4D",
    fontSize: 14,
  },
  forgotPassword: {
    color: "#082B4D",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#082B4D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  socialLoginContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  orText: {
    color: "#082B4D",
    fontSize: 14,
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    backgroundColor: "#082B4D",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  signUpContainer: {
    alignItems: "center",
  },
  noAccountText: {
    color: "#082B4D",
    fontSize: 14,
  },
  signUpText: {
    color: "#F5BE00",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
