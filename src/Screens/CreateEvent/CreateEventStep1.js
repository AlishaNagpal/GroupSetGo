import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker, Animated } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { FloatingTitleTextInputField, FloatingLabel, Toast } from '../../ReusableComponents'
import DateTimePicker from 'react-native-modal-datetime-picker'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class CreateEventStep1 extends Component {
    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            title: '',
            Hashtag: '',
            Address: '',
            Duration: '',
            durationSelected: false,
            call: false,
            isDateTimePickerVisible: false,
            date: 'Event Date',
            startTime: false,
            startTimeValue: 'Start Time',
            colorChangeTime: false,
            colorChangeDate: false,
            isFieldActive: false,
            day: null,
            month: null,
            year: null,
            hour: null,
            amPM: null,
            minutes: null
        }
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        const dateHere = date;
        const year = dateHere.getFullYear();
        const month = dateHere.getMonth();
        const day = dateHere.getDate();
        this.setState({
            day: day,
            month: month + 1,
            year: year,
            colorChangeDate: true,
        })
        this.hideDateTimePicker();
    };

    showStartTimePicker = () => {
        this.setState({ startTime: true });
    };

    hideStartTimePicker = () => {
        this.setState({ startTime: false });
    };

    handleStartTimePicked = date => {
        let dateHere = date;
        let hours = dateHere.getHours();
        let minutes = dateHere.getMinutes();
        this.setState({
            hour: hours,
            // amPM: null,
            minutes: minutes,
            colorChangeTime: true
        })
        this.hideStartTimePicker();
    };

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    _updateMasterState = (attrName, value) => {
        this.setState({ [attrName]: value });
    }

    call = (value) => {
        this.setState({
            durationSelected: value
        })
    }
    callAlert = () => {
        if (this.state.title === '' || this.state.Hashtag === '' || this.state.Address === '') {
            this.resetCall(true)
        } else {
            this.props.navigation.navigate('CreateEventStep2')
        }
    }

    // _returnAnimatedTitleStyles = () => {
    //     const { isFieldActive } = this.state;
    //     return {
    //         top: this.position.interpolate({
    //             inputRange: [0, 1],
    //             outputRange: [18, -13],
    //         }),
    //         fontSize: isFieldActive ? 18 : 15,
    //         //color: isFieldActive ? 'black' : 'dimgrey',
    //     }
    // }
    // renderLabel = () => (
    //     <Animated.Text
    //         style={[styles.dateText, this._returnAnimatedTitleStyles()]}
    //     >
    //         {this.state.date}
    //     </Animated.Text>
    // )

    render() {
        return (
            <View style={styles.containerStyle}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} >
                    <View style={styles.headerView}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle}>
                            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
                            <Text style={styles.headerText} > {strings.createEvent} </Text>
                        </TouchableOpacity>
                        <View style={styles.skipView} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveModal')} >
                                <Text style={styles.skipText} > {strings.save} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.stepText} > {strings.createEventStep1} </Text>
                    <Progress.Bar style={styles.progressBar} progress={25 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />
                    <View style={styles.dataView} >
                        <View style={styles.textInputView} >
                            <FloatingTitleTextInputField
                                attrName='title'
                                title='Title'
                                value={this.state.title}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                                placeholderStyle={styles.placeholderStyle}
                                onSubmitEditing={() => this.refs.Hashtag.refs.FloatingLabelInput.focus()}
                            />
                        </View>
                        <View style={styles.textInputView} >
                            <FloatingTitleTextInputField
                                attrName='Hashtag'
                                title='Hashtag'
                                value={this.state.Hashtag}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                                placeholderStyle={styles.placeholderStyle}
                                ref="Hashtag"
                                onSubmitEditing={() => this.refs.Address.refs.FloatingLabelInput.focus()}
                            />
                        </View>
                        <View style={styles.textInputView} >
                            <FloatingTitleTextInputField
                                placeholderStyle={{ marginTop: vh(20) }}
                                style={{ marginTop: vh(20) }}
                                attrName='Address'
                                title='Address'
                                value={this.state.Address}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                                placeholderStyle={styles.placeholderStyle}
                                ref="Address"
                            />
                        </View>
                        <View style={styles.textInputView} >
                            <TouchableOpacity style={styles.dateTimePicker} onPress={this.showDateTimePicker} activeOpacity={1} >
                                <Text style={[styles.dateText, { color: this.state.colorChangeDate ? Colors.black : Colors.fadedGray, }]} > {this.state.colorChangeDate ? (this.state.day + '-' + this.state.month + '-' + this.state.year) : this.state.date} </Text>
                                <VectorIcons.EvilIcons name="calendar" color={Colors.verLightGrey} size={25} />
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                    mode={'date'}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.rowStyle} > */}
                        <View style={styles.textInputView} >

                            <TouchableOpacity style={styles.dateTimePicker} onPress={this.showStartTimePicker} activeOpacity={1} >
                                <Text style={[styles.dateText, {color: this.state.colorChangeTime ? Colors.black : Colors.fadedGray }]}> {this.state.colorChangeTime ? (this.state.hour + ':' + this.state.minutes) : this.state.startTimeValue} </Text>
                                <VectorIcons.Ionicons name="md-time" color={Colors.verLightGrey} size={25} style={styles.calendar} />
                                <DateTimePicker
                                    isVisible={this.state.startTime}
                                    onConfirm={this.handleStartTimePicked}
                                    onCancel={this.hideStartTimePicker}
                                    mode={'time'}
                                />
                            </TouchableOpacity>

                            {/* </View> */}

                            {/* <View style={styles.Duration} >
                                <FloatingLabel style={styles.textAnimated2} title={'Duration'} call={(value) => this.call(value)} />
                                <Text>{this.state.Duration}</Text>
                                <View style={[styles.separator2, { bottom: this.state.Duration === '' ? vh(0) : vh(3) }]} />
                                {this.state.durationSelected && <Picker
                                    selectedValue={this.state.Duration}
                                    style={styles.pickerStyle}
                                    itemStyle={{ backgroundColor: Colors.white, height: 320 }}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ Duration: itemValue, durationSelected: false })
                                    }>
                                    <Picker.Item label="0.5 Hrs." value="0.5 Hrs." />
                                    <Picker.Item label="1 Hrs." value="1 Hrs." />
                                    <Picker.Item label="1.5 Hrs." value="1.5 Hrs." />
                                    <Picker.Item label="2 Hrs." value="2 Hrs." />
                                    <Picker.Item label="2.5 Hrs." value="2.5 Hrs." />
                                    <Picker.Item label="2 Hrs." value="2 Hrs." />
                                    <Picker.Item label="2.5 Hrs." value="2.5 Hrs." />
                                </Picker>
                                }
                            </View> */}
                        </View>
                    </View>

                </KeyboardAwareScrollView>
                {this.state.call === true &&
                    <Toast top={-15} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
                }
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyle}  >
                    <TouchableOpacity
                        onPress={() => this.callAlert()}
                        activeOpacity={1}
                    >
                        <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>

        );
    }
}