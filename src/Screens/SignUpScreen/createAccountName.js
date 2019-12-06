import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

//Custom Imports
import styles from './styles'
import { Colors, vh, VectorIcons } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountName extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            animatedValue: new Animated.Value(-30)
        })
    }

    error = () => {
        console.log("hjcsvjhkasdcv")
        Animated.timing(this.state.animatedValue, {
            toValue: 30,
            duration: 400,
        }).start(() => {
            setInterval(() => {
                Animated.timing(this.state.animatedValue, {
                    toValue: -30,
                    duration: 400
                }).start()
            }, 1000)
        });
    }


    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                    <Text style={styles.mainHeading}> Lets get your account created.</Text>
                    <Text style={styles.stepText} > STEP 1 OF 5 </Text>
                    <Text style={styles.belowStep} > So...Whats in the name? </Text>
                    <Text style={styles.description}>Forget what Shakespeare said. Tell us what to call you, so there are no more formalities.</Text>

                    <Formik
                        initialValues={{ firstName: '', lastName: '' }}
                        onSubmit={() => {
                            this.props.navigation.navigate('createAccountEmail')
                        }}
                        validationSchema={yup.object().shape({
                            firstName: yup
                                .string().matches(/^[a-zA-Z ]+$/, "invalid Name")
                                .min(3, "Please enter valid name!")
                                .trim()
                                .required("Please Enter First Name!"),
                            lastName: yup
                                .string().matches(/^[a-zA-Z ]+$/, "invalid Name")
                                .trim()
                                .min(2, "Please enter valid name!")
                                .required("Please Enter Last Name!"),
                        })}
                    >
                        {({ values, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                            <React.Fragment>
                                <React.Fragment>

                                    <ErrorMessage name="firstName">{(msg) => {
                                        return (
                                            <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue }]} >
                                                <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                            </Animated.View>
                                        )
                                    }}
                                    </ErrorMessage>

                                    <TextInput
                                        placeholder={'Enter First Name'}
                                        style={styles.textInputStyle}
                                        placeholderTextColor={Colors.black}
                                        onBlur={() => {
                                            setFieldTouched('firstName')
                                            this.error()
                                        }}
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        autoCorrect={false}
                                        onSubmitEditing={() => this.input.focus()}
                                    />
                                </React.Fragment>
                                <React.Fragment>
                                    <ErrorMessage name="lastName">{(msg) => {
                                        return (
                                            <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue }]} >
                                                <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                            </Animated.View>
                                        )
                                    }}
                                    </ErrorMessage>
                                    <TextInput
                                        style={[styles.textInputStyle, { marginTop: vh(14) }]}
                                        placeholder={'Enter Last Name'}
                                        placeholderTextColor={Colors.black}
                                        returnKeyLabel='Submit'
                                        autoCorrect={false}
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        ref={(ref) => { this.input = ref }}
                                        onBlur={() => {
                                            setFieldTouched('lastName')
                                            this.error()
                                        }}
                                    />

                                </React.Fragment>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={handleSubmit}
                                    disabled={!isValid}
                                    activeOpacity={1}
                                >
                                    <Text style={styles.buttonText}> Next </Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </LinearGradient>
        );
    }
}