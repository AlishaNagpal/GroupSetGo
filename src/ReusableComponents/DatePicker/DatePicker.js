import React, { Component } from 'react';
import { Animated, TouchableOpacity, Text, Platform } from 'react-native';
import { string, func, object } from 'prop-types';
import { Colors, VectorIcons } from '../../Constants';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class DatePicker extends Component {

    static propTypes = {
        mode: string.isRequired,
        title: string.isRequired,
        value: string.isRequired,
        updateMasterState: func.isRequired,
        otherTextInputProps: object,
        attrName: string.isRequired
    }

    static defaultProps = {
        otherTextInputAttributes: {},
    }

    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            isFieldActive: false,
            isDateTimePickerVisible: false,
            dateText: ''
        }
    }


    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });

    };

    handleDatePicked = (date) => {
        this._handleFocus();
        this.hideDateTimePicker();
        this.setState({ isFieldActive: true })
        var gsDayNames = [
            'SUN',
            'MON',
            'TUE',
            'WED',
            'THU',
            'FRI',
            'SAT'
        ];
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var d = date;
        var dayName = gsDayNames[d.getDay()];
        var dateName = d.getDate()
        var monthName = months[d.getMonth()];
        this.props.makingFormattedDate && this.props.makingFormattedDate(dayName, dateName, monthName)
        var data = moment(date).format("DD-MMM-YYYY")
        this.setState({ dateText: data })
        this._onChangeText(data)

    };

    handleTimePicked = (time) => {
        this._handleFocus();
        this.hideDateTimePicker();
        this.setState({ isFieldActive: true })
        var data = moment(time).format("hh:mm A")
        this.setState({ dateText: data })
        this._onChangeText(data)
    }

    _handleFocus = () => {
        if (!this.state.isFieldActive) {
            this.setState({ isFieldActive: true });
            Animated.timing(this.position, {
                toValue: 1,
                duration: 150,
            }).start();
        }
    }

    _handleBlur = () => {
        if (this.state.isFieldActive && !this.props.value) {
            this.setState({ isFieldActive: false });
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150,
            }).start();
        }
    }

    _onChangeText = (updatedValue) => {
        const { attrName, updateMasterState } = this.props;
        updateMasterState(attrName, updatedValue);
    }

    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        return {
            top: this.position.interpolate({
                inputRange: [0, 1],
                outputRange: [Platform.OS === 'ios' ? 4 : -7, -12],
            }),
            fontSize: isFieldActive ? 11.5 : 15.3,
            color: Colors.fadedGray
        }
    }

    renderLabel = () => (
        <Animated.Text
            style={[this.props.textStyle, this._returnAnimatedTitleStyles()]}
        >
            {this.props.title}
        </Animated.Text>
    )

    render() {
        return (
            <TouchableOpacity style={[this.props.container]}
                onPress={this.showDateTimePicker}
                activeOpacity={1}>
                {
                    this.renderLabel()
                }

                <Text> {this.state.dateText} </Text>
                <VectorIcons.EvilIcons name="calendar" color={Colors.verLightGrey} size={25} style={styles.bottomIcon} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.props.mode === 'time' ? this.handleTimePicked : this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    mode={this.props.mode}
                />
            </TouchableOpacity>
        )
    }
}