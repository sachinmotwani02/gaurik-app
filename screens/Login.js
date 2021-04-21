import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import LoginItem from './assets/img/LoginItem.png'
import milk from './assets/img/milk.png'

const Login = () => {
    return (
        <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.text}>Welcome Back!</Text>
        </View>
        <Image style={{width:'100%'}} source={LoginItem} />
        
        <View style={styles.subcontainer}>
          
        <Text style={styles.login}>Log in</Text>

        <Text style={styles.unpwd}>Username</Text>

        <TextInput style={styles.input} placeholder="Enter Username" />

        <Text style={styles.unpwd} >Password</Text>

        <TextInput style={styles.input} placeholder="Enter Password" />

        <Text value="\n" />

        <Button title="Login" color='#1E5D8A' fontFamily="Manrope-Regular" />

        </View>
        <Image source={milk} style={styles.img} />
    </View>  
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  
    subcontainer: {
      flex: 3,
      backgroundColor: '#FFC93C',
      paddingLeft: 32,
      paddingTop: 15,
      paddingRight: 32,
    },
  
    img: {
      backgroundColor: '#FFC93C',
      width: '100%',
      // paddingLeft: 0,
      // marginBottom: 0,
    },
  
    welcome: {
      marginLeft: 32,
      marginTop: 130,
      marginBottom:23,
      marginRight:200,
    },
  
    text: {
      color: '#1E5D8A',
      fontSize: 30,
      fontFamily: 'Manrope-Medium'
    },
  
    login: {
      color: '#3a3a3a',
      fontSize:30,
      fontFamily: 'Manrope-Bold'
    },
  
    unpwd: {
      marginTop: 20,
      marginBottom: 5,
      color: '#1E5D8A',
      fontSize: 15,
      fontFamily: 'Manrope-Regular'
    },
  
    input: {
      color: '#000000',
      fontFamily: 'Manrope-Regular',
      borderBottomColor: '#1E5D8A',
          borderBottomWidth: 1,
          paddingBottom: -3,
          marginBottom:10,
    },
});

export default Login
