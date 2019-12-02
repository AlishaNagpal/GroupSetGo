import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from '@react-native-community/datetimepicker'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { VectorIcons, Colors, vh } from '../../Constants';
import { pickDate } from '../../Store/Action/Action'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class CreateAccountBirth extends Component {
    setDate = (event, date) => {
        date = date
        this.props.pickDate(date)
    }
    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountEmail') }} >
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> Awesome!</Text>
                <Text style={styles.mainHeading}> Lets get your account created.</Text>
                <Text style={styles.stepText} > STEP 3 OF 5 </Text>
                <Text style={styles.belowStep} > Your birthday? </Text>
                <Text style={styles.description}>Some of our events have age restrictions for participants. Don’t worry, we won’t share this information on any other platform</Text>
                <DatePicker
                    value={this.props.date}
                    mode={'date'}
                    display = 'calendar'
                    onChange = {this.setDate}
                    style={{height:150}}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('createAccountGender') }} >
                    <Text style={styles.buttonText}> Next </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

function mapStateToProps(state) {
    const { date } = state.Reducer
    console.log(date)
    return { date }

}

function mapDispatchToProps(dispatch) {
    return {
        pickDate: (date) => dispatch(pickDate(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountBirth)