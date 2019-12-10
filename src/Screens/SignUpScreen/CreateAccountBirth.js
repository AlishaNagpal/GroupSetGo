import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-custom-datetimepicker'
import { connect } from 'react-redux'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
EvilIcons.loadFont()


//Custom Imports
import styles from './styles'
import { VectorIcons, Colors, vh, strings } from '../../Constants';
import { pickDate } from '../../Store/Action/Action'
import moment from 'moment';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class CreateAccountBirth extends PureComponent {
    setDate = (event, date) => {
        date = date
        this.props.pickDate(date)
    }

    componentWillMount() {
        this.getDate()
    }

    getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const c = new Date(year - 18, month, day)
        console.log("djsabck", c)
        return (c)
    }
    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountEmail') }} >
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                <Text style={styles.mainHeading}> {strings.created} </Text>
                <Text style={styles.stepText} > {strings.step3} </Text>
                <Text style={styles.belowStep} > {strings.birth} </Text>
                <Text style={styles.description}> {strings.birthDescription} </Text>
                <DatePicker
                    style={styles.datePicker}
                    date={this.props.date}
                    placeholder="select date"
                    format='DD-MM-YYYY'
                    iconComponent={<EvilIcons name="calendar" color={Colors.white} size={25} />}
                    mode={'date'}
                    maxDate={this.getDate()}
                    onDateChange={this.setDate}
                    TouchableComponent={TouchableOpacity}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('createAccountGender') }} >
                    <Text style={styles.buttonText}> {strings.next} </Text>
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