import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Image2 from "../../assets/image2.svg";
import Clock from "../../assets/clock.svg";
import Tableware from "../../assets/tableware.svg";

export default function MainContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>René Redzepi</Text>
      <Text style={styles.smheading}>recommends you</Text>
      <View style={styles.content}>
        <Image2 />
        <Text style={styles.contentHeading}>Vegan Thai Curry Soup</Text>
        <Text style={styles.sm}>
          Spice lovers will slurp up this soup in seconds. Featuring chili
          powder, smoked paprika, and cayenne pepper, every bowl brings the
          heat.
        </Text>
        <View style={styles.info}>
          <View style={styles.descInfo}>
            <Clock />
            <Text>50 min</Text>
          </View>
          <View style={styles.descInfo}>
            <Tableware />
            <Text>4 ppl</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    marginTop: 35,
    padding: 25,
  },
  heading: {
    fontSize: 30,
    color: "#1C0F13",
    fontWeight: "600",
  },
  smheading: {
    fontSize: 30,
    color: "#1C0F13",
    fontWeight: "200",
  },
  content: {
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 25,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    borderRadius: 8,
  },
  contentHeading: {
    fontSize: 18,
    color: "#1C0F13",
    fontWeight: "500",
    marginVertical:10
  },
  sm: {
    fontSize: 16,
    color: "#1C0F13",
    fontWeight: "300",
    marginBottom: 5,
  },
  info: {
    alignItems: "center",
    flexDirection: "row",
    marginTop:30,
    marginBottom:5,
    gap: 12,
    fontSize: 14,
  },
  descInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    color: "#1C0F13",
  },
});
