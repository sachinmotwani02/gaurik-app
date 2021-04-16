import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import goldPremium from 'GaurikMobileApp/assets/img/goldPremium.png'
import to from '../assets/img/to.png'

const PCard = (props) => {

    return (
        <View style={styles.card}>

        <Image source={goldPremium} style={styles.img}/>

            <View style={styles.type}>
             <Text style={styles.price}>₹ {props.price} per pack</Text>
             <Text style={styles.title}>{props.title}</Text>
             <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.btext}>ADD+</Text>
            </View>
        </TouchableOpacity>

        <Image source={to} style={styles.icon}/>

            </View> 
            
         </View>
    )
}

const styles = StyleSheet.create({

    icon: {
        marginTop: 10,
        alignSelf: 'flex-end',

    },

    btext: {
        alignSelf: "center",
        color: '#ffffff',
        fontSize:14,
        fontFamily: 'Manrope-Medium'
      },
    
    button: {
        width: 110,
        marginTop: '4%',
        backgroundColor: "#FFC93C",
         paddingVertical: 10,
        // paddingHorizontal: 25,
        borderRadius: 50,
      },

    type:{
        width: 150,
        justifyContent: 'center',
    },

    img: {
        marginTop:'2%',
        //alignSelf: 'center',
    },
    card:{
        flexDirection: "row",
        alignItems: 'center',
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 20,
         marginTop: '6%',
        // padding: '5%',
        shadowColor: "#7C7C7C",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.6,
shadowRadius: 80,

elevation: 8,
    },

    price:{
        color: 'rgba(0,0,0,0.5)',
        fontSize:14,
        fontFamily: 'Manrope-Medium',
        //textTransform: 'uppercase',
    },

    title:{
        color: '#3a3a3a',
        fontSize:24,
        fontFamily: 'Manrope-Medium',
        textTransform: 'capitalize',
    },
});

export default PCard
