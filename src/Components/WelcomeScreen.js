import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={{ color: "red", fontSize: 22, fontWeight: "bold" }}>
        40k+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "gray",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Explore
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
