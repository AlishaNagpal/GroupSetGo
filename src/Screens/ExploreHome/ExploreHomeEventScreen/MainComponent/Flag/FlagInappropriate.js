import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../../../../Constants';
import styles from './styles'

export default class FlagInappropriate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer} >
        <Text> FlagInappropriate </Text>
      </View>
    );
  }
}
