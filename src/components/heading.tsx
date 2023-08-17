import { View, StyleSheet,ScrollView} from 'react-native'
import MyLogo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"

export default function Heading() {
  return (
    <View style={styles.header}>
    <MyLogo style={styles.logo}/>
    <Search style={styles.search}/>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
     alignContent:"center",
     position:'relative',
     top:72,
     height:110,
    },
    logo:{
      position: 'absolute',
      fontSize:24,
      left:30
    },
    search:{
        position:'absolute',
        fontSize:20,
        right:30
    },
})