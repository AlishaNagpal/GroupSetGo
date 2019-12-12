import React, { Component } from 'react';
import { View } from 'react-native';
import {vh, vw, Colors } from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

export default class RadioButton extends Component {
  render() {
    return (
      <View style={{
        height: vh(30),
        width: vh(30),
        borderWidth: vw(2),
        borderRadius: vh(15),
        borderColor: this.props.outColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
            height: vh(16),
            width: vh(16),
            borderRadius: vh(8),
            backgroundColor: this.props.isCheck ? this.props.inColor : Colors.noColor,
          }} />
      </View>
    )
  }
}
