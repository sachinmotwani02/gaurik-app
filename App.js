import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import curveM from './assets/img/curveM.png'
import Header from './components/Header';
import Card from './components/Card'
import goldPremium from './assets/img/goldPremium.png'


const App = () => {
  return (
    <View>
      <View style={styles.topcontainer}>
        <Image source={curveM} style={styles.img} />
        <Text style={styles.hi}>Hi Karan!</Text>
        <Header title="Categories" />
        <Card title="gaurik milk" subtitle="swad malwa ka" cimg="goldPremium"/>
        <Card title="gaurik desi ghee" subtitle="SHUDDHATA MAI NO COMPROMISE"/>
        <Card title="gaurik butter milk" subtitle="refreshing"/>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({

  topcontainer:{
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '19%',
  },

  img: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },

  hi: {
    color: '#1E5D8A',
    fontSize:20,
    fontFamily: 'Manrope-Medium',
  },

  
});

export default App
