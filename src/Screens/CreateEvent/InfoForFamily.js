import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import { Images, strings } from '../../Constants'

export default class infoForFamily extends Component {
  render() {
    return (
      <TouchableOpacity  style={styles.containerStyleModal} onPress={() => this.props.navigation.navigate('CreateEventStep2')} >
        <View style={styles.infoMain} >
          <Image
            style={styles.infoStyle}
            source={Images.info}
          />
          <Text style={styles.text1} > {strings.text1} </Text>
          <Text style={styles.text2} > {strings.text2} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
