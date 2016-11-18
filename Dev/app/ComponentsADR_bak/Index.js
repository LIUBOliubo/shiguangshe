'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import icons from '../Assets/Icons';
import Swipers from './Swiper1';

import {
  Text,
  View,
  Image,
} from 'react-native';

class Index extends React.Component {

  render() {
      const IndexImages=[
          'http://www.ubugyun.com/sgsImages/page2.jpg'
      ];
    return (
        <View style={styles.box}>
            <View style={styles.title}>
                <View >
                     <Image style={styles.iconImage} source={{uri: icons.star}} />
                </View>
                <Text style={styles.titleText}>食光社</Text>
                <View>
                    <Image style={ styles.iconImage} source={{uri: icons.star}} />
                </View>
            </View>
            <View style={styles.Indexbox} >
                <View style={styles.swiperbox}>
                    <Swipers/>
                </View>
                <View style={styles.others}>
                    <View style={styles.sgsm1}>
                        <View style={styles.sgsm1_l}>
                            <View style={styles.leftimg}>
                                <Image style={styles.iconImageIndex} source={{uri: icons.star}} />
                            </View>
                            <View style={styles.lefttext}>
                                 <Text style={styles.lefttext}>发菜谱</Text>
                            </View>
                        </View>
                        <View style={styles.sgsm1_r}>
                            <View style={styles.leftimg}>
                                <Image style={styles.iconImageIndex} source={{uri: icons.star}} />
                            </View>
                            <View style={styles.lefttext}>
                                 <Text style={styles.lefttext}>范一下&trade;</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sgsm}>
                        <View style={styles.sgsm_l}>
                            <Text style={styles.indexText1}>食光扫盲</Text>
                        </View>
                        <View style={styles.sgsm_r}>
                            <Text style={styles.indexText2}>什么是圈子？</Text>
                        </View>
                    </View>
                    <View style={styles.pagebox}>
                        <View style={styles.sgsm2}>
                            <View style={styles.sgsm_l1}>
                                <Text style={styles.iText1}>|</Text><Text style={styles.iText2}>饭范</Text>
                            </View>
                            <View style={styles.sgsm_r}>
                                <Text style={styles.iText3}>&gt;</Text>
                            </View>
                        </View>
                        <View style={styles.imgbox1}>
                            <Image  source={{uri:IndexImages[0]}} style={styles.IndexImage0}>
                                <View style={styles.imgback}>
                                    <Text style={styles.textback}>
                                        吃货侦探所
                                    </Text>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.imgbox1}>
                            <Image  source={{uri:IndexImages[0]}} style={styles.IndexImage0}>
                                <View style={styles.imgback}>
                                    <Text style={styles.textback}>
                                        吃货侦探所
                                    </Text>
                                </View>
                            </Image>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
  }
};

export { Index as default };
