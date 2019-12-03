import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

//Custom Imports
import styles from './styles'
import { Colors, vh } from '../../Constants/index';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export const createAccountName = React.memo(function pureFunction(props) {
    return (
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}} >
                <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
            </TouchableOpacity>
            <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
            <Text style={styles.mainHeading}> Lets get your account created.</Text>
            <Text style={styles.stepText} > STEP 1 OF 5 </Text>
            <Text style={styles.belowStep} > So...Whats in the name? </Text>
            <Text style={styles.description}>Forget what Shakespeare said. Tell us what to call you, so there are no more formalities.</Text>
            <TextInput
                placeholder={'Enter First Name'}
                style={styles.textInputStyle}
                placeholderTextColor={Colors.black}
            />
            <TextInput
                placeholder={'Enter Last Name'}
                style={[styles.textInputStyle, { marginTop: vh(14) }]}
                placeholderTextColor={Colors.black}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => { props.navigation.navigate('createAccountEmail') }} >
                <Text style={styles.buttonText}> Next </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
})
