import React, { Component } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import {Gradient} from '../../Constants/Gradient';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount(){
    return(
      
        <Gradient />
        
    ), () => this.animate()
  }

  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <View style={{flex: 1}}>
      <Gradient />
      <View style={styles.container}>
        
        <Animated.View
        style={{
          marginLeft,
          height: 30,
          width: 40,
          backgroundColor: 'red'}} />
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  
  }
})


