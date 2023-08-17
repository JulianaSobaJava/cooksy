import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyLogo from "../../assets/logo.svg"
import MyImage from "../../assets/mainImage.svg"

export default function HomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
    <MyLogo style={styles.logo}/>
    <MyImage style={styles.mainImage}/>
    <Text style={styles.text}>All the recipes {'\n'} on your fingertips</Text>
    <Text style={styles.smtext}>Cooking on Thermomix made easy</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
      <Text style={styles.buttonText}>Lest's start</Text>
    </TouchableOpacity>
    

    <StatusBar style="auto" />
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position:'relative'
    },
    logo:{
      position: 'absolute',
      top: 90,
    },
    mainImage:{
      marginBottom:52,
      width:150,
      height:150,
     },
    text:{
      fontWeight: '600',
      fontSize:32,
      lineHeight:35,
      marginTop:10,
      textAlign:'center',
      color:'#1C0F13',
    },
  
  smtext:{
  fontWeight: '400',
  fontSize: 17,
  lineHeight: 23,
  top:10,
  alignItems: 'center',
  textAlign: 'center',
  color: 'rgba(28, 15, 19, 0.9)',
    },
    button: {
      width:280,
      height:40,
      backgroundColor: '#1C0F13', 
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 8,
      color: '#FFFFFF',
      position: 'absolute',
      bottom:70,
    },
    buttonText: {
      color: 'white', 
      textAlign: 'center',
    },
  });