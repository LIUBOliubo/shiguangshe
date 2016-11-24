'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import icons from '../Assets/Icons';
import {
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity,
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
            {imgsrc:'http://www.ubugyun.com/sgsImages/page1.jpg',title:'我叫张三',data:'2017-07-06',words:'该属性需要传入一个方法，该方法如上所示，他会从数据源中接受一条数据，以及他和他所在的section的Id，返回一个可渲染的组件来为这行数据进行渲染',img:['http://www.ubugyun.com/sgsImages/page1.jpg','http://www.ubugyun.com/sgsImages/page2.jpg'],count:'123'},
            {imgsrc:'http://www.ubugyun.com/sgsImages/page1.jpg',title:'我叫张三',data:'2017-07-06',words:'该属性需要传入一个方法，该方法如上所示，他会从数据源中接受一条数据，以及他和他所在的section的Id，返回一个可渲染的组件来为这行数据进行渲染',img:['http://www.ubugyun.com/sgsImages/page1.jpg','http://www.ubugyun.com/sgsImages/page2.jpg'],count:'123'},
            {imgsrc:'http://www.ubugyun.com/sgsImages/page1.jpg',title:'我叫张三',data:'2017-07-06',words:'该属性需要传入一个方法，该方法如上所示，他会从数据源中接受一条数据，以及他和他所在的section的Id，返回一个可渲染的组件来为这行数据进行渲染',img:['http://www.ubugyun.com/sgsImages/page1.jpg','http://www.ubugyun.com/sgsImages/page2.jpg'],count:'123'},
            {imgsrc:'http://www.ubugyun.com/sgsImages/page1.jpg',title:'我叫张三',data:'2017-07-06',words:'该属性需要传入一个方法，该方法如上所示，他会从数据源中接受一条数据，以及他和他所在的section的Id，返回一个可渲染的组件来为这行数据进行渲染',img:['http://www.ubugyun.com/sgsImages/page1.jpg','http://www.ubugyun.com/sgsImages/page2.jpg'],count:'123'}
        ];
        return dataBlob;
    }



    _renderRow(dataSource){
        console.log(dataSource);
        return (
                <View style={styles.fangbox}>
                    <View style={styles.fang1}>
                        <View style={styles.leftf}>
                            <Image style={styles.lfimg} source={{uri:dataSource.imgsrc}} >
                            </Image>
                        </View>
                        <View style={styles.rightf}>
                            <Text style={styles.fText1}>
                                {dataSource.title}
                            </Text>
                            <Text style={styles.fText2}>
                                {dataSource.data}
                            </Text>
                            <Text style={styles.fText3}>
                                {dataSource.words}
                            </Text>
                            <View style={styles.fang1box}>
                                <Image style={styles.oImage} source={{uri:dataSource.img[0]}}/>
                                 <Image style={styles.oImage} source={{uri:dataSource.img[1]}}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.fang2}>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img}/>
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} source={{uri:icons.quan0}}/>
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} source={{uri:icons.fengx}}/>
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} />
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img}/>
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} />
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} />
                        </View>
                        <View style={styles.fang2box}>
                            <Image style={styles.fang2img} source={{uri:icons.fangh}}/>
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
                <Text style={styles.titleText}> 饭范 </Text>
                <View>
                    <Image style={ styles.iconImage} source={{uri: icons.jia}} />
                </View>
            </View>
            <View style={styles.Indexbox,this.Height()} >
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
            </View>
        </View>
    )
  }
};

export { Quans as default };
