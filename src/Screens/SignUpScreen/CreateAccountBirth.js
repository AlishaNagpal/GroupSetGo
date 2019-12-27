import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { VectorIcons, Colors, vh, strings } from '../../Constants';
import moment from 'moment';

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class CreateAccountBirth extends PureComponent {
    state = { isDateTimePickerVisible: false, date: '01-Jan-1990' }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        var data = moment(date).format("DD-MMM-YYYY") 
    
        this.setState({
            date: data
        })
        this.hideDateTimePicker();
        this.props.setData('birthday', data)

    };

    getDate = () => {
        const c = new Date(1990, 0, 1)
        return (c)
    }
    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }} >
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                <Text style={styles.mainHeading}> {strings.created} </Text>
                <Text style={styles.stepText} > {strings.step3} </Text>
                <Text style={styles.belowStep} > {strings.birth} </Text>
                <Text style={styles.description}> {strings.birthDescription} </Text>
                <Text style={styles.textDate} > Your Birthday?</Text>

                <TouchableOpacity style={styles.dateTimePicker} onPress={this.showDateTimePicker} activeOpacity={1} >
                    <Text style={styles.dateText} > {this.state.date} </Text>
                    <VectorIcons.EvilIcons name="calendar" color={Colors.white} size={25} style={styles.calendar} />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    mode={'date'}
                    date={this.getDate()}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('createAccountGender') }} >
                    <Text style={styles.buttonText}> {strings.next} </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (key, value) => dispatch(setData(key, value))
    }
  }
  
  function mapStateToProps(state) {
    const { profileData } = state.Reducer;
    return {
        profileData
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateAccountBirth);
