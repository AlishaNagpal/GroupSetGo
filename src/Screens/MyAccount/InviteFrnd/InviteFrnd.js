import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { strings, Images } from '../../../Constants';

export default class InviteFrnd extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Image
          source={Images.logo}
          style={styles.imageStyle}
        />
        <Text style={styles.text} > {strings.UnderWork} </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.goBack}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
