import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

//Custom Imports
import styles from './styles'
import { Colors, vh, VectorIcons } from '../../Constants';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountPassword extends Component {
    state = { show: false }

    change(show){
        this.setState({
            show: !show
        })
    }
    
    render() {
        return (
            < LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountGender') }} >
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                <Text style={styles.mainHeading}> Lets get your account created.</Text>
                <Text style={styles.stepText} > STEP 5 OF 5 </Text>
                <Text style={styles.belowStep} > Create Password </Text>
                <Text style={styles.description}>Password must include atleast one symbol and must be more than 6 characters</Text>

                <View>
                    <TextInput
                        placeholder={'••••••'}
                        style={styles.textInputStyle}
                        placeholderTextColor={Colors.black}
                        secureTextEntry = {!this.state.show}
                    />

                    <TouchableOpacity onPress = {()=>{this.change(this.state.show)}} >
                    <VectorIcons.Ionicons name={this.state.show ? "md-eye" : "md-eye-off"} color={Colors.black} size={25} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('HomeNavigator') }} >
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
            </LinearGradient >
        );
    }
}
