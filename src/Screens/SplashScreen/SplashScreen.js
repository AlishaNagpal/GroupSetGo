import React, { Component } from 'react';
import {
  View,
  Animated,
  Image
} from 'react-native';

// Custom Imports
import { Gradient } from '../../Constants/Gradient';
import styles from './styles';
import Pics from '../../Constants/images';
import { vh, vw, Colors } from '../../Constants/index';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.moveAnimationLogo = new Animated.ValueXY({ x: 0, y: vh(285) })
    this.moveAnimationText = new Animated.ValueXY({ x: vw(300), y: vh(305) })
    this.animatedValue = new Animated.Value(0)
    this.state = {
      back: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        back: false
      })
      this.animateMove()
    }, 2000)
  }

  animateMove = () => {
    Animated.parallel([
      Animated.timing(this.moveAnimationLogo, {
        toValue: { x: vw(200), y: vh(285) },
      }),
      Animated.timing(this.moveAnimationText, {
        toValue: { x: vw(150), y: vh(305) },
      })
    ]).start(() => this.animateSize())
  }

  animateSize = () => {

    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 3000,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 3000,
      }),
    ]).start(() => { this.props.navigation.navigate('OnboardingLogin') })
  }

  render() {

    const logoScaleX = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1.6]
    })
    const logoScaleY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1.6]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 25]
    })

    if (this.state.back === true) {
      return (
        <View style={{ flex: 1 }}>
          <Gradient />
          <Image source={Pics.logo} style={styles.myLogo} />
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Animated.Image
            source={Pics.logoSmall} style={{ ...this.moveAnimationLogo.getLayout(), height: 40, width: 40, transform: [{ scaleX: logoScaleX }, { scaleY: logoScaleY }] }}
          />
          <Animated.Text
            style={{ ...this.moveAnimationText.getLayout(), color: Colors.darkPink, fontSize: textSize, }}
          >
            Group Set Go
        </Animated.Text>
        </View>
      )
    }
  }
}



