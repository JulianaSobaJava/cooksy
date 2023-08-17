import { View, StyleSheet, ScrollView } from "react-native";
import Heading from "../components/heading";
import Banner from "../components/banner";
import MainContent from "../components/mainContent";
import Button from "../components/button";

export default function Main() {
  return (
    <View style={styles.container}>
      <Heading />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Banner />
          <MainContent />
        </View>
        <Button text="Browse more recipes" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3f1",
    position: "relative",
    flexDirection: "column",
  },
});
