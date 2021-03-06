'use strict';

import React from 'react';
import styles from '../Styles/MainADR';
import icons from '../Assets/Icons';
import MovieDetail from './MovieDetail';

import {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

const REQUEST_URL = 'http://www.behappyli.cn/api/ComingSoonList.json';

export default React.createClass({
  getInitialState() {

    this.fetchData();

    return {
      movies: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loading: false,
    }
  },

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(responseData.subjects),
          loading: true
        })
      })
      .done();
  },

  showMovieDetail(movie) {
    this.props.navigator.push({
      component: MovieDetail,
      passProps: {movie}
    })
  },

  renderMovieList(movie) {
    var imgSrc = '';
    try {
      imgSrc = movie.casts[0].avatars.large;
    } catch(e) {
      imgSrc = icons.none;
    };

    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => this.showMovieDetail(movie)}
      >
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image
              source={{uri: imgSrc}}
              style={styles.image}
            />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>
              {movie.original_title} ({movie.year})
            </Text>
            <Text style={styles.redText}>{movie.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    if ( !this.state.loading ) {
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>即将上映</Text>
          </View>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#6435c9" />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.movieListContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>即将上映</Text>
        </View>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
        />
      </View>
    );
  }
});
