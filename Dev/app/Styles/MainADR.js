'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',

    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },

  itemContent: {
    flex: 1,
    marginLeft: 13,
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6,
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 6,
  },
  redText: {
    color: 'green',
    fontSize: 15,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26,
  },
  image: {
    width: 99,
    height: 100,
    margin: 0,
  },
  box:{
    flex:1,
    backgroundColor:'lightyellow',
  },
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
  },
  movieListContainer: {
    flex: 1,
  },

  tabBar: {
    height: 44,
    backgroundColor: '#eae7ff',
  },
  tabBarBox: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageLight: {
    width: 30,
    height: 30,
    tintColor: 'rgba(50, 205, 50,0.8)',
  },
  iconImageDark: {
    width: 30,
    height: 30,
    tintColor: 'rgba(50, 205, 50,0.3)',
  },
  tabBarLight: {
    fontSize: 10,
    color: 'rgba(50, 205, 50,0.8)',
  },
  tabBarDark: {
    fontSize: 10,
    color: 'rgba(50, 205, 50,0.3)',
  },
  tabBarThumb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // list 顶部样式
  title: {
    backgroundColor: 'rgba(50,205,50,0.8)',
    height: 40,
    paddingLeft:10,
    paddingRight:10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  titleText: {
    flex:1,
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    textAlign:'center',
    color: 'rgba(255, 255, 255,0.8)',
  },
  item_icons:{
    width:40,
  },
  iconImage:{
      width: 20,
      height: 20,
      tintColor: 'rgba(255, 255, 255,0.8)',
  },

  // 详情页
  detailBar: {
    backgroundColor: '#32CD32',
    height: 64,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  summary: {
    flex: 1,
  },
  barLeft: {
    width: 100,
    marginTop: 22,
    position: 'absolute',
  },
  barButton: {
    height: 30,
  },
  barRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  barRightText: {
    fontSize: 20,
    color: 'rgba(50, 205, 50,0.8)',
},
Indexbox:{
    flex: 1,
    flexDirection:'column',
},
swiperbox:{
        height:220,

},

wrapper: {

 },
 slide1: {
   flex: 1,
   height:220,
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
 others:{
     flex:1,
     backgroundColor:'#eee',

 },
 sgsm:{
     height:32,
     backgroundColor:'#fff',
     flexDirection:'row',
     justifyContent:'space-between',
     marginBottom:10,
 },
 sgsm2:{
     height:32,
     backgroundColor:'#fff',
     flexDirection:'row',
     justifyContent:'space-between',

 },
 sgsm_l:{

    paddingLeft:15,
 },
 indexText1:{
    color:'black',
    lineHeight:25,
 },
 sgsm_r:{

    paddingRight:15,
 },
 indexText2:{

    color:'rgba(50,205,50,0.8)',
    lineHeight:25,
 },
 sgsm1:{

     height:32,
     backgroundColor:'#fff',
     flexDirection:'row',
     justifyContent:'space-around',
     marginBottom:10,
 },
 sgsm1_l:{
     flex:1,
    flexDirection:'row',
    paddingLeft:75,
    paddingTop:6,
 },
 index1Text1:{
    color:'black',
    lineHeight:25,
    width:30,
 },
 sgsm1_r:{
     flex:1,
     flexDirection:'row',
     paddingRight:25,
     paddingTop:6,
 },
 index1Text2:{
    color:'rgba(50,205,50,0.8)',
    lineHeight:25,
 },
 iconImageIndex: {
   width: 20,
   height: 20,
   tintColor: 'rgba(50, 205, 50,0.3)',
 },
 leftimg:{
     width:26,
     height:26,
 },
 lefttext:{
     width:130,
 },
 iText1:{
     fontSize:20,
     width:14,
     textAlign:'center',
     lineHeight:26,
     color:'rgba(50,205,50,0.8)',
},
iText2:{
   fontSize:14,
   width:60,
   textAlign:'left',
   lineHeight:24,
   color:'black',
},
sgsm_l1:{
     flex:1,
     flexDirection:'row',
     justifyContent:'flex-start',
},
iText3:{
    color:'#8B8B7A',
    fontSize:26,
    lineHeight:30,
},
pagebox:{
    height:400,
    flexDirection:'column',
    justifyContent:'flex-start',
    backgroundColor:'#fff',
    marginBottom:10,
},
imgbox1:{
    height:180,
    backgroundColor:'yellow',
    flexDirection:'column',
    justifyContent:'flex-start',
},
imgbox2:{
    height:180,
    backgroundColor:'yellow',
    flexDirection:'column',
    justifyContent:'flex-start',
    marginBottom:10,
},
imgback:{
    height:30,
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingLeft:30,
},
textback:{
    color:'#fff',
    lineHeight:24,
},
IndexImage0:{
    flex:1,
    height:180,
    justifyContent:'flex-end',
},
fangbox:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    borderStyle:'solid',
    borderColor:'#ccc',
    borderWidth:0.5,
    marginBottom:12,
    backgroundColor:'#fff',
},
fang1:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingTop:6,
    paddingBottom:20,
    paddingRight:4,
},
leftf:{
    flex:2,
    paddingTop:10,
    justifyContent:'flex-start',

    alignItems:'center',
},
lfimg:{
    width:50,
    height:50,
    borderRadius:25,
},
rightf:{
    flex:7,
    paddingTop:10,
    flexDirection:'column',
    justifyContent:"flex-start",
},
fang2:{
    height:30,
    flexDirection:'row',
},
fText1:{
    fontSize:18,
    color:'black',
    height:40,
},
fText2:{
    fontSize:12,
    color:'#32CD32',
    height:30,
},
fText3:{
    fontSize:14,
    color:'#333',
    paddingBottom:20,
},
fang2box:{
    paddingTop:5,
    flex:1,
    height:30,
},
fang2img:{
     width:20,
    height:20,
},
fang1box:{
    height:100,
    flexDirection:'row',
    justifyContent:'flex-start',
},
oImage:{
    width:100,
    height:100,
    marginRight:10,
},
quanbox:{
    flex:1,
    flexDirection:'column',
},
quanbox1:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    backgroundColor:'#eff'
},
quan1:{

    height:230,
    marginBottom:12,
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#eee',
    backgroundColor:'#fff',
},
header1:{
    paddingLeft:10,
    paddingRight:10,
    height:40,
    flexDirection:'row',
    justifyContent:'flex-start',
    borderBottomWidth:1.5,
    borderStyle:'solid',
    borderColor:'#ddd',
},
hleft:{
    flex:1,
    lineHeight:30,
    fontSize:14,
    color:'black',
},
hright:{
    flex:1,
    lineHeight:30,
    textAlign:'right',
    color:'#666',
    fontSize:12,
},
tiaobox:{
    height:60,
    flexDirection:'row',

},
qlogo:{
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
},
qimg:{
    width:44,
    height:44,
    borderRadius:22,
},
qtbox:{
    flex:1,
    paddingLeft:6,
    flexDirection:'column',
    justifyContent:'flex-start',
    borderBottomWidth:1,
    borderStyle:'solid',
    borderColor:'#ccc',

},
qtitle:{
    flex:1,
},
qnum:{
     flex:1,
     flexDirection:'row',

},
htp1:{
    textAlign:'left',
    lineHeight:30,
    color:'black',
    fontSize:16,
},
htp2:{
    textAlign:'left',
    lineHeight:30,
    fontSize:18,
    color:'#538',
},
htp3:{
    textAlign:'left',
    lineHeight:28,
    fontSize:12,
    color:'black',
}
});
