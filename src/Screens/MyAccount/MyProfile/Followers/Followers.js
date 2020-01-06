import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Images, strings} from '../../../../Constants'
import styles from './Styles'

export default class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.center} >
        <Image
          source={Images.logo}
          style={styles.imageStyle}
        />
        <Text style={styles.text} > {strings.UnderWork} </Text>
      </View>
    );
  }
}
