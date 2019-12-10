import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

//Custom Imports
import styles from './styles'
import { VectorIcons, Colors, vh, strings } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountEmail extends PureComponent {

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


    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountName') }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome}  </Text>
                    <Text style={styles.mainHeading}> {strings.created} </Text>
                    <Text style={styles.stepText} > {strings.step2} </Text>
                    <Text style={styles.belowStep} > {strings.email} </Text>
                    <Text style={styles.description}> {strings.emailDescription} </Text>

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
                                    placeholder={strings.emailPlaceholder}
                                    style={[styles.textInputStyle, { marginTop: vh(42.7) }]}
                                    placeholderTextColor={Colors.black}
                                    onBlur={() => {
                                        setFieldTouched('email')
                                        this.error()
                                    }}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    autoCorrect={false}
                                />

                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={handleSubmit}
                                    disabled={!isValid}
                                // activeOpacity={1}
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