'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import MovieList from './app/ComponentsADR_bak/MovieList';
import Fangs from './app/ComponentsADR_bak/Fangs';
import icons from './app/Assets/Icons';
//import Featured from './app/ComponentsADR_bak/Index';
import Index from './app/ComponentsADR_bak/Index';
import Books from './app/ComponentsADR_bak/Books';
import Quans from './app/ComponentsADR_bak/Quans';
import Markits from './app/ComponentsADR_bak/Markits';
import styles from './app/Styles/MainADR';

export default class qqqq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    }
  }

  renderScene(route, navigator) {
    let Component = route.component;
    return <Component route={route} navigator={navigator} />
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    const routes = [
      {name: 'Index', component: Index},
      {name: 'Books', component: Books},
      {name: 'Fangs', component: Fangs},
      {name: 'Quans', component: Quans},
      {name: 'Markits', component: Markits}
    ];

    const tabBars = [
      {title: '首页', imgSrcLight: icons.starActive, imgSrcDark: icons.star},
      {title: '菜谱', imgSrcLight: icons.calendarActive, imgSrcDark:icons.calendar},
      {title: '饭范', imgSrcLight: icons.starActive, imgSrcDark: icons.star},
      {title: '圈子', imgSrcLight: icons.starActive, imgSrcDark: icons.star},
      {title: '集市', imgSrcLight: icons.starActive, imgSrcDark: icons.star}
    ];

    let tabBarList = tabBars.map((item, index) => {
      return (
        <View key={index} style={styles.tabBarItem}>
          <TouchableHighlight
            underlayColor = "#eee"
            onPress={(route) => {
              this.nav.replace(routes[index]);
            }}>
            <View style={styles.tabBarThumb}>
              <Image style={this.state.tabIndex === index ? styles.iconImageLight : styles.iconImageDark} source={{uri: this.state.tabIndex === index ? item.imgSrcLight : item.imgSrcDark}} />
              <Text style={this.state.tabIndex === index ? styles.tabBarLight : styles.tabBarDark}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    })
    return (
      <View style={{flex: 1}}>
        <StatusBar

          barStyle="light-content"
        />
        <Navigator
          initialRoute = {routes[0]}
          initialRouteStack = {routes}
          configureScene = {this.configureScene}
          renderScene={(route, navigator) =>this.renderScene(route, navigator)}
          ref={(navigator) => {
             this.nav = navigator;
          }}
          onWillFocus = {(nextRoute) => {
             if(nextRoute != routes[this.state.tabIndex]){
                this.setState({
                  tabIndex: routes.indexOf(nextRoute)
                })
             }
          }}
          navigationBar = {
            <View style={styles.tabBar}>
              <View style={styles.tabBarBox}>
                {tabBarList}
              </View>
            </View>
          }
        />
      </View>
    )
  }
};

AppRegistry.registerComponent('qqqq', () => qqqq);
