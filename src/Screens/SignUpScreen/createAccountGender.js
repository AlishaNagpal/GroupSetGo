import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

//Custom Imports
import styles from './styles'
import { Colors, vh } from '../../Constants';
import RadioButton from '../../ReusableComponents/RadioButton'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class createAccountGender extends Component {
    state = { maleChosen: false, femaleChosen: false }

    clicked(check, id) {
        if (id === 1) {
            this.setState({
                maleChosen: check,
                femaleChosen: !check
            })
        } else {
            this.setState({
                maleChosen: !check,
                femaleChosen: check
            })
        }
    }



    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountBirth') }} >
                    <Icon name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                <Text style={styles.mainHeading}> Lets get your account created.</Text>
                <Text style={styles.stepText} > STEP 4 OF 5 </Text>
                <Text style={styles.belowStep} > Your gender? </Text>
                <Text style={styles.description}>Some of our events are gender specific. sLet us know which gender you belong to.</Text>

                <View style={styles.radioButtonView} >
                    <TouchableOpacity onPress={() => { this.clicked(true, 1) }}  style={styles.radioButton} >
                        <RadioButton outColor={Colors.white} inColor={Colors.white} isCheck={this.state.maleChosen} />
                    </TouchableOpacity>
                    <Text style={styles.radioText} > Male </Text>
                </View>

                <View style={[styles.radioButtonView,{marginTop: vh(30)}]} >
                <TouchableOpacity onPress={() => { this.clicked(true, 2) }} style={styles.radioButton} >
                    <RadioButton outColor={Colors.white} inColor={Colors.white} isCheck={this.state.femaleChosen} />
                </TouchableOpacity>
                <Text style={styles.radioText} > Female </Text>
                </View>
                

                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('createAccountPassword') }} >
                    <Text style={styles.buttonText}> Next </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}
