import { View, Text, TouchableHighlight,StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps{
    text:string
}

export default function Button({text}:ButtonProps) {
  return (
    <TouchableHighlight style={styles.button} >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
      width:315,
      height:50,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 8,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#1C0F13',
      marginBottom:70
  
    },
    buttonText: {
      color: '#1C0F13', 
      textAlign: 'center',
    },
  });
  