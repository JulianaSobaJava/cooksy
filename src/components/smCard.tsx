import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface CardProps{
    mainText: string,
    secoText: string,
    smText?:string
}

export  function SmallCard({ mainText, secoText,smText}: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{mainText}</Text>
      <Text style={styles.smheading}>{secoText}</Text>
      {smText &&   <Text style={styles.sm}>{smText}</Text>} 
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
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
    sm:{
        fontSize:16,
        color:"#1C0F13",
        fontWeight:"500",
        marginBottom:5,
        marginTop:25,
    },
  });