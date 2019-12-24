import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images, strings } from '../../Constants';
import styles from './styles';

export default class ExploreChat extends Component {
  render() {
    return (
      <View style={styles.main}>
        {/* <View style={styles.header} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAccount')} >
            <Image
              source={Images.maleImage}
              style={styles.profile}
            />
          </TouchableOpacity>
          <Text style={styles.saveText} > {strings.chatIcon} </Text>
        </View> */}
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
