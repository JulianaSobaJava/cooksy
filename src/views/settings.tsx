import { View, Text ,StyleSheet} from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
    <Text>Settings</Text>
  </View>
  )
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