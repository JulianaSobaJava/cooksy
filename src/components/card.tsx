import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Image1 from "../../assets/image10.svg"
import Clock from "../../assets/clock.svg"
import Tableware from "../../assets/tableware.svg"

export default function Card() {
  return (
    <View style={styles.container}>
          <Text style={styles.heading}>Recipe</Text>
          <Text style={styles.smheading}>of the day</Text>
      <View style={styles.desc}>
      <Text style={styles.sm}>Roasted Pumpkin Soup</Text>
        <View style={styles.info}>
        <View style={styles.descInfo}><Clock /><Text>50 min</Text></View>
        <View style={styles.descInfo}><Tableware/><Text>4 ppl</Text></View>
      </View>
      <Image1/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop:33,
      left:25,
      padding:25,
      alignSelf: "flex-start",
      alignItems:"flex-start",
      position:"relative",
      borderRadius:8
    },
    heading:{
      fontSize:32,
      color:"#1C0F13",
      fontWeight:"600"
    },
    smheading:{
      fontSize:32,
      color:"#1C0F13", 
      fontWeight:"200"
    },
    desc:{
        marginTop:25,
      },
    sm:{
        fontSize:16,
        color:"#1C0F13",
        fontWeight:"500",
        marginBottom:5
    },
    info:{
         alignItems:"center",
         flexDirection:"row",
         marginBottom:15,
         gap:12,
         fontSize:14
    },
    descInfo:{
        flexDirection:"row",
        alignItems:"center",
        gap:2,
        color: "#1C0F13"

    }
  });