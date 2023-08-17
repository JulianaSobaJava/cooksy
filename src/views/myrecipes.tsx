import { View, Text ,StyleSheet} from "react-native";
import React from "react";
import { recipes } from "../mocks/recipes";
import RecipesCard from "../components/recipescard";

export default function MyRecipes() {
  return (
    <View style={styles.container}>
      <Text>My Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    position: "relative",
    flexDirection: "column",
    alignItems:'center',
    justifyContent:'center'
  },
});
