import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'

import styles from './styles'
import {Colors, vw, vh} from '../../Constants'

const CustomSwitch = (props) => {
    toggleSwitch = () => {
        Animated.timing(props.switchPosition, {
          toValue: props.switchEnabled
            ? { x: vw(0), y: vh(0) }
            : { x: vw(20), y: vh(0) },
          duration: 200,
        }).start(props.toggleSwitch);
      };

    return (
        <TouchableOpacity
            onPress={this.toggleSwitch}
            activeOpacity={1}
            style={[styles.containerStyle, {
                backgroundColor: props.switchEnabled
                    ? Colors.darkNewGreen
                    : Colors.lightGray,
            }]}>
            <Animated.View
                style={[
                    styles.switchAnimatedViewStyle,
                    props.switchPosition.getLayout(),
                ]}></Animated.View>
        </TouchableOpacity>
    )
}

export default CustomSwitch
