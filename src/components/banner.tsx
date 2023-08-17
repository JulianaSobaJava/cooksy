import { View, StyleSheet,ScrollView} from 'react-native'
import Card from './card';
import {SmallCard} from './smCard';

export default function Banner() {
  return (
    <View style={{flex: 1}}>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                <View style={{gap:15, flexDirection:'row'}}>
                <Card/>
                <View style={styles.extraCards}>
                    <SmallCard mainText="Cook" secoText="like pro" smText={`Thermomix advanced ${'\n'} tips and tricks >`}/>
                    <SmallCard mainText="Check" secoText="new updates"/>
                </View>
                </View>
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  extraCards:{
    marginTop:33,
      paddingTop:35,
      gap:15,
      marginRight:10
  }
});