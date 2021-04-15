import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import goldPremium from 'GaurikMobileApp/assets/img/goldPremium.png'

const Card = (props) => {

    return (
        <View style={styles.card}>
             <Text style={styles.subtitle}>{props.subtitle}</Text>
             <Text style={styles.title}>{props.title}</Text>
             <Image source={goldPremium} style={styles.img}/>
         </View>
    )
}

const styles = StyleSheet.create({
    img: {
        marginTop:'2%',
        alignSelf: 'center',
    },
    card:{
        height: 250,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginTop: '6%',
        padding: '5%',
        shadowColor: "#7C7C7C",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.6,
shadowRadius: 80,

elevation: 8,
    },

    subtitle:{
        color: '#B9B9B9',
        fontSize:13,
        fontFamily: 'Manrope-Medium',
        textTransform: 'uppercase',
    },

    title:{
        color: '#3a3a3a',
        fontSize:26,
        fontFamily: 'Manrope-Medium',
        textTransform: 'capitalize',
    },
});

export default Card
