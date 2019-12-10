import React, { PureComponent } from 'react';
import { View, TouchableOpacity, TextInput, Text, Animated } from 'react-native';
import { Colors, VectorIcons, vh, strings } from '../../../../../Constants';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
export default class FlagInappropriate extends PureComponent {
  state = { value: '', animatedValue: new Animated.Value(-60), call: false }

  error = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: -30,
      duration: 400,
    }).start();
  }
  close = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: -100,
      duration: 400
    }).start()
  }

  callAlert = (value) => {
    if (this.state.value === '') {
      this.error()
      this.setState({
        call: value
      })
    } else {
      this.props.navigation.navigate('Response')
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails6')} >
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputBox} >
          <TextInput
            placeholder={strings.description}
            style={styles.descriptionBox}
            multiline={true}
            value={this.state.value}
            onChangeText={(text) => this.setState({ value: text })}
          />
          <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
            <TouchableOpacity onPress={() => this.callAlert(true)}  >
              <Text style={styles.buttonText} > {strings.submit} </Text>
            </TouchableOpacity>
          </LinearGradient>

          {this.state.call === true &&
            <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue }]} >
              <Animated.View style={styles.topView} >
                <Animated.Text style={styles.infoText} > Info </Animated.Text>
                <Animated.Text style={styles.errorMessage}>{strings.enterData}</Animated.Text>
                <TouchableOpacity style={styles.headerButton} onPress={() => this.close()}  >
                  <VectorIcons.AntDesign name="close" size={vh(25)} color={Colors.fadedGray2} />
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          }

        </View>
      </View>
    );
  }
}

