import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

//Custom Imports
import styles from './styles'
import { Colors, vh, VectorIcons, vw } from '../../Constants';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountPassword extends PureComponent {

    constructor(props) {
        super(props);
        this.state = ({
            animatedValue: new Animated.Value(-30),
            showFirst: false,
            showSecond: false
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

    render() {
        return (
            < LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountGender') }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>
                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                    <Text style={styles.mainHeading}> Lets get your account created.</Text>
                    <Text style={styles.stepText} > STEP 5 OF 5 </Text>
                    <Text style={styles.belowStep} > Create Password </Text>
                    <Text style={styles.description}>Password must include atleast one symbol and must be more than 6 characters</Text>


                    <Formik
                        initialValues={{ password: '', confirmPassword: '' }}
                        onSubmit={() => {
                            this.props.navigation.navigate('HomeNavigator')
                        }}
                        validationSchema={yup.object().shape({
                            password: yup
                                .string()
                                .matches(/^(?=.{6,})(?=.*[@#$%^&+=]).*$/, "Password must contain a special symbol!")
                                .min(6, "Password must be atleast 6 characters long!")
                                .required("Please enter your password!"),
                            confirmPassword: yup
                                .string()
                                .oneOf([yup.ref('password'), null], 'Passwords must match')
                                .required('Password confirmation is required!'),
                        })}
                    >
                        {({ values, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                            <React.Fragment>
                                <React.Fragment>
                                    <ErrorMessage name="password">{(msg) => {
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
                                    <View>
                                        <TextInput
                                            placeholder={'Password'}
                                            style={styles.textInputStyle}
                                            secureTextEntry={!this.state.showFirst}
                                            placeholderTextColor={Colors.black}
                                            onBlur={() => {
                                                setFieldTouched('password')
                                                this.error()
                                            }}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            autoCorrect={false}
                                        />

                                        <TouchableOpacity onPress={() => { this.changeFirst(this.state.showFirst) }} >
                                            <VectorIcons.Ionicons name={this.state.showFirst ? "md-eye" : "md-eye-off"} color={Colors.black} size={25} style={styles.eyeIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </React.Fragment>
                                <React.Fragment>
                                    <ErrorMessage name="confirmPassword">{(msg) => {
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
                                    <View>
                                        <TextInput
                                            placeholder={'Confirm Password'}
                                            style={[styles.textInputStyle, { marginTop: vh(20) }]}
                                            secureTextEntry={!this.state.showSecond}
                                            placeholderTextColor={Colors.black}
                                            onBlur={() => {
                                                setFieldTouched('confirmPassword')
                                                this.error()
                                            }}
                                            value={values.confirmPassword}
                                            onChangeText={handleChange('confirmPassword')}
                                            autoCorrect={false}
                                        />

                                        <TouchableOpacity onPress={() => { this.changeSecond(this.state.showSecond) }} >
                                            <VectorIcons.Ionicons name={this.state.showSecond ? "md-eye" : "md-eye-off"} color={Colors.black} size={25} style={styles.eyeIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </React.Fragment>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={handleSubmit}
                                    disabled={!isValid}
                                    activeOpacity={1}
                                >
                                    <Text style={styles.buttonText}> Submit </Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </LinearGradient >
        );
    }
}
