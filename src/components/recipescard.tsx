import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Clock from "../../assets/clock.svg";
import Tableware from "../../assets/tableware.svg";



interface RecipesCardProps{
    image?:string,
    title:string,
    text:string,
    min:number,
    pe:number
}
export default function RecipesCard({image,title,text,pe,min}:RecipesCardProps) {
  return (
    <View style={styles.content}>
    <Text style={styles.contentHeading}>{title}</Text>
    <Text style={styles.sm}>
    {text}
    </Text>
    <View style={styles.info}>
      <View style={styles.descInfo}>
        <Clock />
        <Text>{min} min</Text>
      </View>
      <View style={styles.descInfo}>
        <Tableware />
        <Text>{pe} {pe > 1 ? ' ppl': ' pers'}</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
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
  