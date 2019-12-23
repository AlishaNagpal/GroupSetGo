import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { FloatingTitleTextInputField, FloatingLabel, Toast } from '../../ReusableComponents'
import DatePicker from 'react-native-modal-datetime-picker'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class CreateEventStep1 extends Component {

    state = {
        title: '',
        Hashtag: '',
        Address: '',
        Event_Date: '',
        Start_Time: '',
        Duration: '',
        durationSelected: false,
        call: false,
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    _updateMasterState = (attrName, value) => {
        this.setState({ [attrName]: value });
    }

    getMaxDate = () => {
        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth();
        const c = new Date(year, month + 8, day)
        return (c)
    }

    getDate = () => {
        const date = new Date();
        return (date)
    }

    call = (value) => {
        this.setState({
            durationSelected: value
        })
    }

    callAlert = () => {
        if (this.state.title === '' || this.state.Hashtag === '' || this.state.Address === '' || this.state.Event_Date === '' || this.state.Start_Time === '' || this.state.Duration === '') {
            this.resetCall(true)
        } else {
            this.props.navigation.navigate('CreateEventStep2')
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} >
                    <View style={[styles.headerView,{height: vh(90)}]}>
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
                            />
                            <View style={styles.separator} />
                        </View>
                        <View style={styles.textInputView} >
                            <FloatingTitleTextInputField
                                attrName='Hashtag'
                                title='Hashtag'
                                value={this.state.Hashtag}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                            />
                            <View style={styles.separator} />
                        </View>
                        <View style={styles.textInputView} >
                            <FloatingTitleTextInputField
                                attrName='Address'
                                title='Address'
                                value={this.state.Address}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                            />
                            <View style={styles.separator} />
                        </View>
                        <View style={styles.textInputView} >
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.Event_Date}
                                mode="date"
                                placeholder=" "
                                format="DD-MM-YYYY"
                                minDate={this.getDate()}
                                maxDate={this.getMaxDate()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onOpenModal={this.accessHandleFocus}
                                iconComponent={<VectorIcons.EvilIcons name="calendar" color={Colors.fadedGray} size={20} style={styles.iconMargin} />}
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        right: 0,
                                        top: vh(10),
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        top: vh(5)
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ Event_Date: date }) }}
                            />
                            <FloatingLabel style={styles.textAnimated} title={'Event Date'} />
                        </View>
                        <View style={styles.rowStyle} >
                            <View style={styles.textInputView} >
                                <DatePicker
                                    style={styles.timePicker}
                                    date={this.state.Start_Time}
                                    mode="time"
                                    placeholder=" "
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    iconComponent={<VectorIcons.Ionicons name="md-time" color={Colors.fadedGray} size={16} style={styles.iconMargin} />}
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            top: vh(10),
                                        },
                                        dateInput: {
                                            top: vh(5)
                                        }
                                    }}
                                    onDateChange={(date) => { this.setState({ Start_Time: date }) }}
                                />
                                <FloatingLabel style={styles.textAnimated} title={'Start Time'} />
                            </View>

                            <View style={styles.Duration} >
                                <FloatingLabel style={styles.textAnimated2} title={'Duration'} call={(value) => this.call(value)} />
                                <Text>{this.state.Duration}</Text>
                                <View style={styles.separator2} />
                                {this.state.durationSelected && <Picker
                                    selectedValue={this.state.Duration}
                                    style={styles.pickerStyle}
                                    itemStyle={{ backgroundColor: Colors.white, height: 320 }}
                                    enabled={false}
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
                                </Picker>}
                            </View>
                        </View>
                        <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyle}  >
                            <TouchableOpacity
                                onPress={() => this.callAlert()}
                                activeOpacity={1}
                            >
                                <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </KeyboardAwareScrollView>
                {this.state.call === true &&
                    <Toast top={-15} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
                }
            </View>
        );
    }
}
