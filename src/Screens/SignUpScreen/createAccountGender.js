import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

//Custom Imports
import styles from './styles'
import { Colors, vh } from '../../Constants';
import RadioButton from '../../ReusableComponents/RadioButton'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export const createAccountGender = React.memo(function pureFunction(props) {
    return (
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('createAccountBirth')}} >
                <Icon name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
            </TouchableOpacity>
            <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
            <Text style={styles.mainHeading}> Lets get your account created.</Text>
            <Text style={styles.stepText} > STEP 1 OF 5 </Text>
            <Text style={styles.belowStep} > Your gender? </Text>
            <Text style={styles.description}>Some of our events are gender specific. sLet us know which gender you belong to.</Text>
            {/* <RadioButton outColor = {Colors.white} inColor = {Colors.white} clicked = {} /> */}
            {/* <RadioButton/> */}
            <TouchableOpacity style={styles.buttonStyle} onPress={() => { props.navigation.navigate('createAccountPassword') }} >
                <Text style={styles.buttonText}> Next </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
})
