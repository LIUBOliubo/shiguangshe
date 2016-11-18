import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../Styles/MainADR.js';

class Swipers extends React.Component {
    const vm=Dimensions.get('window').width;
    SwiperOverStyle() {
            return {width: vm, height: 100, overflow: 'hidden'}
     };
  render () {

      console.log("132");
      const imgurl=[
          require('../images/page1.jpg'),
          require('../images/page2.jpg'),
          require('../images/page3.jpg'),
          require('../images/page4.jpg')
      ];
      let bannerlists = imgurl.map((item, index) => {
     return (
       <View key={index} style={styles.slide1}>
         <TouchableWithoutFeedback
         >
           <Image
             style={this.SwiperOverStyle()}
             source={{
             uri: imgurl[index]
           }}/>
         </TouchableWithoutFeedback>
       </View>
     )
 });
    return (
        <View style={this.SwiperOverStyle()}>
          <Swiper
            autoplayTimeout={1.5}
            autoplay={true}
            showsPagination={false}
            style={styles.wrapper}>
             {bannerlists}
          </Swiper>
    </View>

    )
  }
};

export {Swipers as default};
