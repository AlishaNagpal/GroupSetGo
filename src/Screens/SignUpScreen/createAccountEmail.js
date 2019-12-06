import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

//Custom Imports
import styles from './styles'
import { VectorIcons, Colors, vh } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountEmail extends Component {

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
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountName') }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                    <Text style={styles.mainHeading}> Lets get your account created.</Text>
                    <Text style={styles.stepText} > STEP 2 OF 5 </Text>
                    <Text style={styles.belowStep} > Your email address? </Text>
                    <Text style={styles.description}>We hate spams as much as you do. We promise not to send any unwanted emails.</Text>

                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={() => {
                            this.props.navigation.navigate('createAccountBirth')
                        }}
                        validationSchema={yup.object().shape({
                            email: yup
                                .string()
                                .email()
                                .required("Please enter an email!"),

                        })}
                    >
                        {({ values, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                            <React.Fragment>
                                <ErrorMessage name="email">{(msg) => {
                                    return (
                                        <Animated.View style={[styles.errorView, { marginTop: this.state.animatedValue }]} >
                                            <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                        </Animated.View>
                                    )
                                }}
                                </ErrorMessage>

                                <TextInput
                                    placeholder={'Enter email address'}
                                    style={[styles.textInputStyle, { marginTop: vh(42.7) }]}
                                    placeholderTextColor={Colors.black}
                                    onBlur={() => {
                                        setFieldTouched('email')
                                        this.error()
                                    }}
                                    value={values.firstName}
                                    onChangeText={handleChange('email')}
                                    autoCorrect={false}
                                />

                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={handleSubmit}
                                    disabled={!isValid}
                                    // activeOpacity={1}
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