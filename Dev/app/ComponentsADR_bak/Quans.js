'use strict';

import React from 'react';
import styles from '../Styles/MainADR';


import {
  Text,
  View,

} from 'react-native';

class Quans extends React.Component {
  render() {
    return (

        <View style={styles.box}>
            <View style={styles.title}>
                  <Text style={styles.titleText}>圈子</Text>
            </View>
        </View>
    )
  }
};

export { Quans as default };
