import React, { Component } from 'react';
import ReactNative, { AppRegistry, View, TouchableOpacity, findNodeHandle, Text, StyleSheet } from 'react-native';


export default class Check extends Component {

  constructor() {
    super();

    this.state = { x: null, y: null, width: null, height: null }
  }

  calculateDimensions = () => {
    this.refs.innerView.measureLayout(findNodeHandle(this.refs.containerView), (xPos, yPos, Width, Height) => {
      this.setState({ x: xPos, y: yPos, width: Width, height: Height });
    });
  }

  render() {
    return (
      <View ref="containerView" style={styles.container}>
        <View ref="innerView" style={{...styles.innerView}}>
          <Text style={styles.text}>X: {this.state.x}</Text>
          <Text style={styles.text}>Y: {this.state.y}</Text>
          <Text style={styles.text}>Width: {this.state.width}</Text>
          <Text style={styles.text}>Height: {this.state.height}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.ButtonDesign} onPress={this.calculateDimensions}>
          <Text style={styles.text}>Calculate Blue Box's Dimensions</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    innerView: {
      backgroundColor: '#ff5722',
      width: '70%',
      marginBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ButtonDesign: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0091ea',
      },
      text: {
        color: 'white',
        fontSize: 17
      },
  
    });