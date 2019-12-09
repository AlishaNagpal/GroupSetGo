import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity, Easing} from 'react-native';

export default class Animation2 extends Component {
  state = {
    opacityChanged: false,
    opac: 0,
    rotateRight: false,
  };
  rotateValue = new Animated.Value(0);
  constructor() {
    super();
    this.rotateValue.addListener(({value}) => this.setState({opac: value}));
  }

  spinLeft = this.rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  spinRight = this.rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  rotateView = () => {
    //  this.rotateValue = new Animated.Value(0);
    Animated.timing(this.rotateValue, {
      toValue: this.state.rotateRight ? 0 : 1,
      duration: 1000,
    }).start(() =>
      this.setState({
        rotateRight: !this.state.rotateRight,
      }),
    );
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View
          style={
            ({flex: 1, alignItems: 'center', justifyContent: 'center'},
            {
              transform: [
                // {rotateX: this.spin},
                {
                  rotateY: !this.state.rotateRight
                    ? this.spinLeft
                    : this.spinRight,
                },
                // {rotateZ: this.spin},
              ],
            })
          }>
           <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: 'yellow',
              opacity: 1 - this.state.opac,
            }}></View>

          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 300,
              backgroundColor: 'red',
              opacity: this.state.opac,
            }}></View>
        </Animated.View>

        <TouchableOpacity style={{marginTop: 200}} onPress={this.rotateView}>
          <Text>Press me to rotate</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
