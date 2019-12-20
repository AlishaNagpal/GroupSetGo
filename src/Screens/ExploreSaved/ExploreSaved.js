import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Images, strings } from '../../Constants';
import styles from './styles';

export default class ExploreSaved extends Component {
  render() {
    return (
      <View style={styles.main}>
          <Image
          source={Images.logo}
          style={styles.imageStyle}
          />
        <Text style={styles.text} > {strings.UnderWork} </Text>
      </View>
    );
  }
}
