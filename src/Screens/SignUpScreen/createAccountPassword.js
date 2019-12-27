import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast } from '../../ReusableComponents'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { Colors, vh, VectorIcons, strings } from '../../Constants';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class createAccountPassword extends PureComponent {

    state = { password: '', confirmPassword: '', call: false, showFirst: false, showSecond: false }

    componentDidMount() {
        this.input1.focus()
    }

    passwordValidation = (password, confirmPassword) => {
        if (!(/^(?=.{6,})(?=.*[@#$%^&+=]).*$/.test(password)) || !(/^(?=.{6,})(?=.*[@#$%^&+=]).*$/.test(confirmPassword)) || this.state.password === '' || this.state.confirmPassword === '' || this.state.password !== this.state.confirmPassword) {
            this.resetCall(true)
        } else {
            this.props.setData('password',this.state.password) 
            this.props.navigation.navigate('HomeNavigator')   
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }
    changeFirst(show) {
        this.setState({
            showFirst: !show
        })
    }
    changeSecond(show) {
        this.setState({
            showSecond: !show
        })
    }

    render() {
        return (
            < LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView keyboardShouldPersistTaps = {'always'} >
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>
                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                    <Text style={styles.mainHeading}> {strings.created} </Text>
                    <Text style={styles.stepText} > {strings.step5} </Text>
                    <Text style={styles.belowStep} > {strings.pass} </Text>
                    <Text style={styles.description}> {strings.passDescription} </Text>

                    <View>
                        <TextInput
                            placeholder={strings.passPlaceholder}
                            style={styles.textInputStyle}
                            secureTextEntry={!this.state.showFirst}
                            placeholderTextColor={Colors.black}
                            returnKeyType='next'
                            returnKeyLabel='Next'
                            autoCorrect={false}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({ password: text })}
                            ref={(ref) => { this.input1 = ref }}
                            onSubmitEditing={() => this.input2.focus()}
                        />

                        <TouchableOpacity onPress={() => { this.changeFirst(this.state.showFirst) }} >
                            <VectorIcons.Ionicons name={this.state.showFirst ? "md-eye" : "md-eye-off"} color={Colors.black} size={25} style={styles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            placeholder={strings.passConfirm}
                            style={[styles.textInputStyle, { marginTop: vh(20) }]}
                            secureTextEntry={!this.state.showSecond}
                            placeholderTextColor={Colors.black}
                            returnKeyType='done'
                            returnKeyLabel='Submit'
                            autoCorrect={false}
                            value={this.state.lastName}
                            onChangeText={(text) => this.setState({ confirmPassword: text })}
                            ref={(ref) => { this.input2 = ref }}
                            onSubmitEditing={() => this.passwordValidation(this.state.password, this.state.confirmPassword)}
                        />

                        <TouchableOpacity onPress={() => { this.changeSecond(this.state.showSecond) }} >
                            <VectorIcons.Ionicons name={this.state.showSecond ? "md-eye" : "md-eye-off"} color={Colors.black} size={25} style={styles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={1}
                        onPress={() => this.passwordValidation(this.state.password, this.state.confirmPassword)}
                    >
                        <Text style={styles.buttonText}> {strings.submit} </Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
                {this.state.call === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.passwordMatch} call={(value) => this.resetCall(value)} />
                }
            </LinearGradient >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      setData: (key, value) => dispatch(setData(key, value))
    }
  }

function mapStateToProps(state) {
    const { profileData } = state.Reducer;
    return {
        profileData
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(createAccountPassword);
