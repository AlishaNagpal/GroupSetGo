import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

//Custom Imports
import styles from './styles'
import { Colors, vh } from '../../Constants';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export const createAccountEmail = React.memo(function pureFunction(props) {
    return (
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('createAccountName')}} >
                <Icon name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
            </TouchableOpacity>
            <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
            <Text style={styles.mainHeading}> Lets get your account created.</Text>
            <Text style={styles.stepText} > STEP 2 OF 5 </Text>
            <Text style={styles.belowStep} > Your email address? </Text>
            <Text style={styles.description}>We hate spams as much as you do. We promise not to send any unwanted emails.</Text>
            <TextInput
                placeholder={'Enter email address'}
                style={[styles.textInputStyle, { marginTop: vh(42.7) }]}
                placeholderTextColor={Colors.black}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => { props.navigation.navigate('createAccountBirth') }} >
                <Text style={styles.buttonText}> Next </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
})
