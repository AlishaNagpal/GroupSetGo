import React, { Component } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Colors, VectorIcons, vh } from '../../Constants';
import styles from './styles'

export default class Toast extends Component {
  state = { animatedValue: new Animated.Value(this.props.top) }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: this.props.from,
      duration: 400,
    }).start();
  }
  close = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: this.props.to,
      duration: 400
    }).start()
    this.props.call && this.props.call(false)
  }


  render() {
    return (
      <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue, top: this.props.top }]} >
        <Animated.View style={styles.topView} >
          <Animated.Text style={styles.infoText} > Info </Animated.Text>
          <Animated.Text style={styles.errorMessage}> {this.props.message} </Animated.Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => this.close()}  >
            <VectorIcons.AntDesign name="close" size={vh(25)} color={Colors.fadedGray2} />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  }
}
