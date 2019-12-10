import React, { PureComponent } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

Icon.loadFont()
Icon1.loadFont()
Icon2.loadFont()


/**
 * custom imports
 */
import { styles } from './styles'
import strings from '../../Constants/Strings'
import { Colors } from '../../Constants'
import { vw, VectorIcons, vh } from '../../Constants'
import images from '../../Constants/images'

const colors = [Colors.fadedRed, Colors.darkishPink]

export default class LoginWithEmail extends PureComponent {
    state = {
        isFocusedEmail: false,
        isFocusedPassword: false,
        email: '',
        password: '',
        passwordVisible: false,
        animatedValue: new Animated.Value(-40)
    }

    error = () => {
        Animated.timing(this.state.animatedValue, {
            toValue: 40,
            duration: 400,
        }).start();
    }

    close = () => {
        Animated.timing(this.state.animatedValue, {
            toValue: -40,
            duration: 400
        }).start()
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

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={() => {
                        this.props.navigation.navigate('HomeNavigator')
                    }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email()
                            .required("Please enter an email!"),
                        password: yup
                            .string()
                            .matches(/^(?=.{6,})(?=.*[@#$%^&+=]).*$/, "Password must contain a special symbol!")
                            .min(6, "Password must be atleast 6 characters long!")
                            .required("Please enter your password!")
                    })}
                >
                    {({ values, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                        <React.Fragment>
                            <View style={[styles.emailInputViewStyle, { borderBottomColor: this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                                <ErrorMessage name="email">{(msg) => {
                                    return (
                                        <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue }]} >
                                            <Animated.Text style={styles.infoText} >  Info </Animated.Text>
                                            <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                            <TouchableOpacity style={styles.headerButton} onPress={() => this.close()}  >
                                                <VectorIcons.AntDesign name="close" size={vh(25)} color={Colors.fadedGray2} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    )
                                }}
                                </ErrorMessage>


                                <Icon
                                    style={styles.searchIcon}
                                    name="envelope-o" size={vw(13.4)}
                                    color={this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'} />
                                <TextInput
                                    style={[styles.emailTextInputStyle]}
                                    placeholder="Enter Email"
                                    placeholderTextColor={Colors.black}
                                    returnKeyType='next'
                                    // onChangeText={text => { this.setState({ email: text }) }}
                                    autoCorrect={false}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => {
                                        setFieldTouched('email')
                                        this.error()
                                    }}
                                    onSubmitEditing={() => this.input.focus()}
                                />
                            </View>

                            <View style={[styles.passwordInputViewStyle, { borderBottomColor: this.state.password.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                                <ErrorMessage name="password">{(msg) => {
                                    return (
                                        <Animated.View style={[styles.errorView1, { marginTop: this.state.animatedValue }]} >
                                            <Animated.Text style={styles.infoText} >  Info </Animated.Text>
                                            <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                            <TouchableOpacity style={styles.headerButton} onPress={() => this.close()}  >
                                                <VectorIcons.AntDesign name="close" size={vh(25)} color={Colors.fadedGray2} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    )
                                }}
                                </ErrorMessage>


                                <Icon1
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
                                    // onChangeText={text => { this.setState({ password: text }) }} 
                                    autoCorrect={false}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    ref={(ref) => { this.input = ref }}
                                    onBlur={() => {
                                        setFieldTouched('password')
                                        this.error()
                                    }}
                                />
                                {this.state.password.length != 0 &&
                                    <Icon2
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
                                    onPress={handleSubmit}
                                    disabled={!isValid}
                                >
                                    <Text style={styles.loginButtonTitleStyle}>Login</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </React.Fragment>
                    )}
                </Formik>

                <View style={styles.createAnAccountViewStyle}>
                    <Text style={styles.newToGroupSetGoStyle}>{strings.newToGroupSetGo}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("createAccountName")}>
                        <Text style={styles.createAccountTextStyle}>Create an account </Text>
                    </TouchableOpacity>
                </View>
                {/* </KeyboardAwareScrollView> */}
            </View >
        );
    }
}