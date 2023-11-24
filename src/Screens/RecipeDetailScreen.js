import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function RecipeDetailScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{ flexDirection: "row", marginTop: 60, marginHorizontal: 16 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color={"white"} />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color={"white"} />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 260,
            width: 260,
            position: "absolute",
            top: -140,
            left: 60,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            marginTop: 120,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>⏲️</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        marginRight: 6,
                      }}
                    />
                    <Text style={{ fontSize: 18 }}>{ingredient}</Text>
                  </View>
                );
              })}
            </View>
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Steps:
              </Text>
              {item.steps.map((step, index) => {
                return (
                  <Text
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1}. ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
