'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import icons from  '../Assets/Icons.js';

import {
  Text,
  View,
  Image,
} from 'react-native';

class Books extends React.Component {
  render() {
    return (
        <View style={styles.box}>
            <View style={styles.title}>
                <View >
                     <Image style={styles.iconImage}/>
                </View>
                <Text style={styles.titleText}> 菜谱 </Text>
                <View>
                    <Image style={ styles.iconImage} source={{uri: icons.jia}} />
                </View>
            </View>
        </View>
    )
  }
};

export { Books as default };
