import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import smolcurveM from '../assets/img/smolcurveM.png';
import Header from '../components/Header';
import PCard from '../components/PCard';
import back from '../assets/img/back.png';

const ProductsPage = () => {
  return (
    <ScrollView>
      <View style={styles.topcontainer}>
        <Image source={smolcurveM} style={styles.img} />
        <Image source={back} style={styles.back} />
        <Header title="Gaurik Milk" />
        <PCard title="gaurik milk" price="30" cimg="goldPremium" />
        <PCard title="toned fresh" price="30" />
        <PCard title="standard powder" price="30" />
        <PCard title="chai super" price="30" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topcontainer: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '10%',
  },

  img: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },

  back: {
    marginBottom: '6%',
  },
});

export default ProductsPage;
