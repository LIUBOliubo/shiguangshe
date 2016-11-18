'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import Swiper from 'react-native-swiper';


import {
  Text,
  View,
  Image,
   Dimensions,
} from 'react-native';
var  vm=Dimensions.get('window').width;
class Swiper1 extends React.Component {

    SwiperOverStyle() {
            return {width: vm, height: 220, overflow: 'hidden'};
     }
  render() {
      console.log(this.SwiperOverStyle());
      const imgurl=[
         'http://www.ubugyun.com/sgsImages/page1.jpg',
         'http://www.ubugyun.com/sgsImages/page2.jpg',
         'http://www.ubugyun.com/sgsImages/page3.jpg'
      ]
    return (
        <Swiper style={styles.wrapper}
        showsButtons={false}
        autoplayTimeout={20}
        autoplay={true}
        showsPagination={false}
        >
            <View style={styles.slide1,this.SwiperOverStyle()}>
              <Image style={styles.slide1,this.SwiperOverStyle()} source={{uri:imgurl[0]}}></Image>
            </View>
            <View style={styles.slide1,this.SwiperOverStyle()}>
              <Image style={styles.slide1,this.SwiperOverStyle()} source={{uri:imgurl[1]}}></Image>
            </View>
            <View style={styles.slide1,this.SwiperOverStyle()}>
              <Image style={styles.slide1,this.SwiperOverStyle()} source={{uri:imgurl[2]}}></Image>
            </View>
      </Swiper>
    )
  }
};

export { Swiper1 as default };
