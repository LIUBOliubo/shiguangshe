'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import icons from  '../Assets/Icons.js';

import {
  Text,
  View,
  Image,
  Dimensions,
  ListView,
} from 'react-native';
var  Height=Dimensions.get('window').height;
var iHeight=Height-88;

class Quans extends React.Component {
    constructor(props){
       super(props);
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
           dataSource: ds.cloneWithRows(this._genRows()),
       };
       console.log(this.state.dataSource);
   }
    Height(){
        return{height:iHeight,backgroundColor:'#FFFAF0'}
    }

    _genRows(){
        const dataBlob = [
        {title1:'我的圈子',title2:'全部',imglogo:'http://www.ubugyun.com/sgsImages/page1.jpg',
        header:'通州新华家园美食圈',
        count:175},
        {title1:'我的圈子',title2:'全部',imglogo:'http://www.ubugyun.com/sgsImages/page1.jpg',
        header:'通州新华家园美食圈',
        count:175},
        {title1:'我的圈子',title2:'全部',imglogo:'http://www.ubugyun.com/sgsImages/page1.jpg',
        header:'通州新华家园美食圈',
        count:175}

        ];


        return dataBlob;
    }

    _renderRow(dataSource){
        console.log(dataSource);
        const IndexImages=[
            'http://www.ubugyun.com/sgsImages/page2.jpg'
        ];
        return(
            <View style={styles.quanbox1}>
                <View style={styles.quan1}>
                    <View style={styles.header1}>
                        <Text style={styles.hleft}>
                            {dataSource.title1}
                        </Text>
                        <Text style={styles.hright}>
                            {dataSource.title2}
                        </Text>
                    </View>
                    <View style={styles.tiaobox}>
                        <View style={styles.qlogo}>
                            <Image style={styles.qimg} source={{uri:dataSource.imglogo}}/>
                        </View>
                        <View style={styles.qtbox}>
                            <View style={styles.qtitle}>
                                <Text style={styles.htp1}>
                                    {dataSource.header}
                                </Text>
                            </View>
                            <View style={styles.qnum}>
                                <Text style={styles.htp2}>
                                    {dataSource.count}
                                </Text>
                                <Text style={styles.htp3}> 人</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tiaobox}>
                        <View style={styles.qlogo}>
                            <Image style={styles.qimg} source={{uri:dataSource.imglogo}}/>
                        </View>
                        <View style={styles.qtbox}>
                            <View style={styles.qtitle}>
                                <Text style={styles.htp1}>
                                    {dataSource.header}
                                </Text>
                            </View>
                            <View style={styles.qnum}>
                                <Text style={styles.htp2}>
                                    {dataSource.count}
                                </Text>
                                <Text style={styles.htp3}> 人</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tiaobox}>
                        <View style={styles.qlogo}>
                            <Image style={styles.qimg} source={{uri:dataSource.imglogo}}/>
                        </View>
                        <View style={styles.qtbox}>
                            <View style={styles.qtitle}>
                                <Text style={styles.htp1}>
                                    {dataSource.header}
                                </Text>
                            </View>
                            <View style={styles.qnum}>
                                <Text style={styles.htp2}>
                                    {dataSource.count}
                                </Text>
                                <Text style={styles.htp3}> 人</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
  render() {

    return (
        <View style={styles.box}>
            <View style={styles.title}>
                <View >
                     <Image style={styles.iconImage}/>
                </View>
                <Text style={styles.titleText}> 圈子 </Text>
                <View>
                    <Image style={ styles.iconImage} source={{uri: icons.fdj}} />
                </View>
            </View>
            <View style={styles.quanbox,this.Height()}>
                <ListView
                    dataSource={this.state.dataSource} renderRow={this._renderRow}>
                </ListView>
            </View>
        </View>
    )
  }
};

export { Quans as default };
