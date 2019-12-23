import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { strings, Images, VectorIcons, Colors, vh } from '../../../Constants';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()}>
          <VectorIcons.Ionicons name='ios-arrow-back' color={Colors.fadedRed} size={vh(30)} />
        </TouchableOpacity>
        <View style={styles.center} >
          <Image
            source={Images.logo}
            style={styles.imageStyle}
          />
          <Text style={styles.text} > {strings.UnderWork} </Text>
        </View>
      </View>
    );
  }
}

