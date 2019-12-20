import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput } from 'react-native';
import { string, func, object } from 'prop-types';
import { Colors, vh, vw, } from '../../Constants';

export default class FloatingTitleTextInputField extends Component {
  static propTypes = {
    attrName: string.isRequired,
    title: string.isRequired,
    value: string.isRequired,
    updateMasterState: func.isRequired,
    keyboardType: string,
    otherTextInputProps: object,
  }

  static defaultProps = {
    keyboardType: 'default',
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    }
  }

  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 600,
      }).start();
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 600,
      }).start();
    }
  }

  _onChangeText = (updatedValue) => {
    const { attrName, updateMasterState } = this.props;
    updateMasterState(attrName, updatedValue);
  }

  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -15],
      }),
      fontSize: isFieldActive ? 11.5 : 15,
      color: Colors.fadedGray
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Animated.Text
          style={[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
        >
          {this.props.title}
        </Animated.Text>
        <TextInput
          value={this.props.value}
          style={this.props.style}
          underlineColorAndroid='transparent'
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          {...this.props.otherTextInputProps}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: vw(380),
    height: vh(50),
    marginVertical: vh(4)
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'SourceSansPro-Regular',
    left: vw(10),
  }
})