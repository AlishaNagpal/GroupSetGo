import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Dimensions
} from 'react-native';

// Custom Imports
import { Gradient } from '../../Constants/Gradient';
import styles from './styles';
import Pics from '../../Constants/images';
import { vh, vw, Colors } from '../../Constants/index';

const {width,height} = Dimensions.get("window");

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.moveAnimationLogo = new Animated.ValueXY({ x: 0, y: height/2.5 })
    this.moveAnimationText = new Animated.ValueXY({ x: width, y: height/2 })
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
    }, 500)
  }

  animateMove = () => {
    Animated.sequence([
    Animated.parallel([
      Animated.timing(this.moveAnimationLogo, {
        toValue: { x: width/2.25, y: height/2.4},
        duration: 800,
      }),
      Animated.timing(this.moveAnimationText, {
        toValue: { x: width/3.5, y: height/2 },
        duration: 800,
      })
    ]),
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500,
    })]
    ).start(() => { this.props.navigation.navigate('OnboardingLogin') } )
  }

  render() {

    const logoScale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1.6]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
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
            source={Pics.logoSmall} style={{ ...this.moveAnimationLogo.getLayout(), ...styles.logoStyle,  transform: [{ scale: logoScale }] }}
          />
          <Animated.Text
            style={{ ...this.moveAnimationText.getLayout(),  transform:[{scale:textSize}], ...styles.textStyle }}
          >
            Group Set Go
        </Animated.Text>
        </View>
      )
    }
  }
}



