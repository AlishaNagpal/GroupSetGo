import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

//Custom Imports
import styles from './styles'
import { Colors, vh, VectorIcons, strings } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountName extends PureComponent {

    constructor(props) {
        super(props);
        this.state = ({
            animatedValue: new Animated.Value(-30)
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

    focus = () => {
        if (this.input1 === '') {
            this.input1.focus()
        } else {
            this.input2.focus()
        }
    }


    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                    <Text style={styles.mainHeading}> {strings.created} </Text>
                    <Text style={styles.stepText} > {strings.step1} </Text>
                    <Text style={styles.belowStep} > {strings.name} </Text>
                    <Text style={styles.description}> {strings.nameDescription} </Text>

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
                                                <Animated.Text style={styles.infoText} >  Info </Animated.Text>
                                                <Animated.Text style={styles.errorMessage}>{msg}</Animated.Text>
                                                <TouchableOpacity style={styles.headerButton} onPress={() => this.close()}  >
                                                    <VectorIcons.AntDesign name="close" size={vh(25)} color={Colors.fadedGray2} />
                                                </TouchableOpacity>
                                            </Animated.View>
                                        )
                                    }}
                                    </ErrorMessage>

                                    <TextInput
                                        style={styles.textInputStyle}
                                        placeholder={strings.firstName}
                                        placeholderTextColor={Colors.black}
                                        returnKeyType='next'
                                        returnKeyLabel='Next'
                                        autoCorrect={false}
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        ref={(ref) => { this.input1 = ref }}
                                        onBlur={() => {
                                            setFieldTouched('firstName')
                                            this.error()
                                        }}
                                        onSubmitEditing={this.focus}

                                    />
                                </React.Fragment>
                                <React.Fragment>
                                    <ErrorMessage name="lastName">{(msg) => {
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
                                    <TextInput
                                        style={[styles.textInputStyle, { marginTop: vh(14) }]}
                                        placeholder={strings.lastName}
                                        placeholderTextColor={Colors.black}
                                        returnKeyType='done'
                                        returnKeyLabel='Submit'
                                        autoCorrect={false}
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        ref={(ref) => { this.input2 = ref }}
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
                                    <Text style={styles.buttonText}> {strings.next} </Text>
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </LinearGradient>
        );
    }
}