import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
         <View>
             <Text style={styles.header}>{props.title}</Text>
         </View>
    )
}

const styles = StyleSheet.create({

    header: {
    color: '#3a3a3a',
    fontSize:30,
    fontFamily: 'Manrope-Medium',
    // marginLeft: '5%',
    },
});

export default Header
