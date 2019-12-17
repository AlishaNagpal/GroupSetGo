import React, { Component } from 'react';
import { View } from 'react-native';
import {vw, Colors } from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

export default class RadioButton extends Component {
  render() {
    return (
      <View style={{
        height: vw(this.props.outerCircleDimension), //30
        width: vw(this.props.outerCircleDimension), //30
        borderWidth: vw(2), //2
        borderRadius: vw(this.props.outerCircleDimension / 2), //15
        borderColor: this.props.outColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View style={{
            height: vw(this.props.innerCircleDimension), //16
            width: vw(this.props.innerCircleDimension), //16
            borderRadius: vw(this.props.innerCircleDimension/2), //8
            backgroundColor: this.props.isCheck ? this.props.inColor : Colors.noColor,
          }} />
      </View>
    )
  }
}
