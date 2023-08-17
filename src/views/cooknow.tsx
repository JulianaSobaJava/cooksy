import { View, Text ,StyleSheet} from "react-native";
import React from "react";
export default function CookNow() {
  return (
    <View style={styles.container}>
    <Text>Cook Now</Text>
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