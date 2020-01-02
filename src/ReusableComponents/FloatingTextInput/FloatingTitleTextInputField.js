import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput, Platform } from 'react-native';
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
        duration: 200,
      }).start();
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 200,
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
        outputRange: [ Platform.OS === 'ios' ? 18 : 20, 3],
      }),
      fontSize: isFieldActive ? 11.5 : 15,
      color: Colors.fadedGray
    }
  }

  handleOnSubmitEditing = () => {
    if (this.props.onSubmitEditing)
      this.props.onSubmitEditing()
  }

  renderLabel = () => (
    <Animated.Text
      style={[Styles.placeholderStyle, this.props.placeholderStyle, this._returnAnimatedTitleStyles()]}
    >
      {this.props.title}
    </Animated.Text>
  )

  render() {
    return (
      <View style={Styles.container}>
        {
          this.renderLabel()
        }

        <TextInput
          value={this.props.value}
          style={[Styles.textInputStyle, this.props.style]}
          ref={"FloatingLabelInput"}
          underlineColorAndroid='transparent'
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          onSubmitEditing={this.handleOnSubmitEditing}
          {...this.props.otherTextInputProps}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: vw(60),
    paddingLeft: vw(10),
    paddingRight: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderStyle: {
    position: 'absolute',
    paddingLeft: vw(10),
    paddingRight: vw(10),
    marginLeft: vw(12),
    marginRight: vw(12),
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    color: Colors.fadedGray,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: vw(11),
  },
  textInputStyle: {
    borderColor: Colors.verLightGrey,
    borderBottomWidth: vw(1),
    marginLeft: vw(13.3),
    width: vw(370),
  },
})