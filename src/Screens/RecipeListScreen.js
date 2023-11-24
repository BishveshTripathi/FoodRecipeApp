import { SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import SearchFilter from "../Components/SearchFilter";
import CategoriesFilter from "../Components/CategoriesFilter";
import RecipeCard from "../Components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 60 }}>
      {/* --------------------------Header in RecipeListScreen------------------------------------ */}

      <Header headerText={"Hi, Raj"} headerIcon={"bell-o"} />

      {/* --------------------------Search Filter in RecipeListScreen------------------------------ */}

      <SearchFilter icon="search" placeholder={"Search recipe here"} />

      {/* --------------------------Categories List in RecipeListScreen---------------------------- */}

      <CategoriesFilter />

      {/* --------------------------Categories List in RecipeListScreen---------------------------- */}

      <View style={{ marginTop: 22, flex: 1 }}>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
