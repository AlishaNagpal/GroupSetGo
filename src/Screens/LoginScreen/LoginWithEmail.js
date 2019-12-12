import React, { PureComponent } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast } from '../../ReusableComponents'

import { styles } from './styles'
import strings from '../../Constants/Strings'
import { Colors, VectorIcons } from '../../Constants'
import { vw, } from '../../Constants'
import images from '../../Constants/images'

const colors = [Colors.fadedRed, Colors.darkishPink]

export default class LoginWithEmail extends PureComponent {
    state = {
        isFocusedEmail: false,
        isFocusedPassword: false,
        email: '',
        password: '',
        passwordVisible: false,
        call: false,
    }


    componentDidMount() {
        this.input1.focus()
    }

    validation = (email, password) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || !(/^(?=.{6,})(?=.*[@#$%^&+=]).*$/.test(password)) || this.state.password === '' || this.state.email === '') {
            this.resetCall(true)
        } else {
            this.props.navigation.navigate('HomeNavigator')
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    togglePasswordVisibility = () => {
        this.setState({
            passwordVisible: !this.state.passwordVisible
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                        source={images.crossImage}
                        style={styles.crossButtonStyle} />
                </TouchableOpacity>
                {/* <KeyboardAwareScrollView> */}
                <Text style={styles.welcomeBackStyle}>{strings.welcomeBack}</Text>
                <Text style={styles.signInToContinueStyle}>{strings.signInToContinue}</Text>
                <View style={[styles.emailInputViewStyle, { borderBottomColor: this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <VectorIcons.FontAwesome
                        style={styles.searchIcon}
                        name="envelope-o" size={vw(13.4)}
                        color={this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'} />
                    <TextInput
                        style={[styles.emailTextInputStyle]}
                        placeholder="Enter Email"
                        placeholderTextColor={Colors.black}
                        returnKeyType='next'
                        onChangeText={text => { this.setState({ email: text }) }}
                        autoCorrect={false}
                        value={this.state.email}
                        ref={(ref) => { this.input1 = ref }}
                        onSubmitEditing={() => this.input2.focus()}
                    />
                </View>

                <View style={[styles.passwordInputViewStyle, { borderBottomColor: this.state.password.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <VectorIcons.AntDesign
                        style={styles.searchIcon}
                        name="lock"
                        size={vw(16.4)}
                        color={this.state.password.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'} />
                    <TextInput
                        style={styles.passwordTextInputStyle}
                        placeholder="Enter password"
                        placeholderTextColor={Colors.black}
                        returnKeyType='done'
                        secureTextEntry={this.state.passwordVisible ? true : false}
                        onChangeText={text => { this.setState({ password: text }) }}
                        autoCorrect={false}
                        value={this.state.password}
                        ref={(ref) => { this.input2 = ref }}
                        onSubmitEditing={() => this.validation(this.state.email, this.state.password)}
                    />
                    {this.state.password.length != 0 &&
                        <VectorIcons.MaterialCommunityIcons
                            name={this.state.passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={vw(16.4)}
                            onPress={this.togglePasswordVisibility} />
                    }
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotPasswordTextStyle}>Forgot password?</Text>
                </TouchableOpacity>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
                    <TouchableOpacity
                        style={styles.loginButtonStyle}
                        onPress={() => this.validation(this.state.email, this.state.password)}
                    >
                        <Text style={styles.loginButtonTitleStyle}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.createAnAccountViewStyle}>
                    <Text style={styles.newToGroupSetGoStyle}>{strings.newToGroupSetGo}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("createAccountName")}>
                        <Text style={styles.createAccountTextStyle}>Create an account </Text>
                    </TouchableOpacity>
                </View>
                {/* </KeyboardAwareScrollView> */}
                {
                    this.state.call === true &&
                    <Toast top={-40} from={40} to={-40} message={strings.Email_Password} call={(value) => this.resetCall(value)} />
                }
            </View >
        );
    }
}