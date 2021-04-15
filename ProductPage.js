//import React, { Component } from 'react';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import curve from './assets/img/curve.png'
import goldPremium from './assets/img/goldPremium.png'
//import DropDownPicker from 'react-native-dropdown-picker'
import cashPay from './assets/icons/cashPay.png'



const App = () => {
  return (
    <View>
      <Image source={curve} style={styles.img} />
      <View style={styles.pcontainer}>
          <Image source={goldPremium} style={styles.pimg} />
          <Text style={styles.ptext}>Gold Premium</Text>
      </View>
      <View style={styles.secondcontainer}>
        <Text style={styles.pricetext}>₹ 30/pack</Text>
        <Text style={styles.stocktext}>In stock.</Text>

        <TouchableOpacity>
            <View style={styles.button1}>
              <Text style={styles.btext}>Buy Now</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.btext}>Add To Cart</Text>
            </View>
        </TouchableOpacity>  
      </View>    
      <View style={styles.pay}>
            <Image source={cashPay} />
            <Text style={styles.payText}>Pay On Delivery</Text>
        </View>

      <View style={styles.tablecon}>
        <Text style={styles.nutriFacts}>Nutrition Facts</Text>
  
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({

  img: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },

  pcontainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: '22%',
  },

  pimg: {
    
  },

  secondcontainer: {
    marginTop: '6%',
    marginLeft: '10%',
    marginRight: '10%',
  },

  ptext: {
    paddingTop: 28,
    width: 150,
    color: '#3a3a3a',
    fontSize:30,
    fontFamily: 'Manrope-Bold'
  },

  pricetext: {
    color: '#3a3a3a',
    fontSize:30,
    fontFamily: 'Manrope-Medium'
  },

  stocktext: {
    marginTop:'.5%',
    color: '#49B723',
    fontSize:19,
    fontFamily: 'Manrope-Medium'
  },

  button1: {
    marginTop: '5%',
    backgroundColor: "#FFC93C",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },

  btext: {
    alignSelf: "center",
    color: '#3a3a3a',
    fontSize:18,
    fontFamily: 'Manrope-Medium'
  },

  button2: {
    marginTop: '5%',
    backgroundColor: "#F49640",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  pay: {
    flexDirection: "row",
    paddingLeft: '10%',
    borderTopColor: '#B0B0B0',
    borderTopWidth: 2.5,
    borderBottomColor: '#B0B0B0',
    borderBottomWidth: 2.5,
    paddingVertical: 12,
    marginTop: '5%',
  },
  payText: {
    marginLeft: "2%",
    color: '#3a3a3a',
    fontSize:16,
    fontFamily: 'Manrope-Medium'
  },
  
  tablecon: {
    marginTop: '6%',
    marginLeft: '10%',
    marginRight: '10%',
  },

  nutriFacts:{
    color: '#3a3a3a',
    fontSize:26,
    fontFamily: 'Manrope-Medium'
  },

});

export default App
