import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Platform } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { FloatingTitleTextInputField, Toast, DatePicker, FloatingLabel } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import PickerViewAndroid from './PickerViewAndroid'
import { connect } from 'react-redux'
import { DURATION_SELECTED } from '../../Store/Action/Action'

class CreateEventStep1 extends Component {
    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            title: '',
            Hashtag: '',
            startDate: null,
            timeNoted: null,
            call: false,
            colorChangeTime: false,
            colorChangeDate: false,
            callingPicker: false,
            addressCall: false,
            formattedDate: null,
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    _updateMasterState = (attrName, value) => {
        this.setState({ [attrName]: value });
    }

    onSubmitHashtag = () => {
        let res = this.state.Hashtag.replace(/[\B]^|\b^|\s\#+|\s+\b/g, " #")
        this.setState({
            Hashtag: res
        })
        this.callinAddress()
    }

    callAlert = () => {
        if (this.state.title === '' || this.state.Hashtag === '' || this.props.address === 'Address *' || this.state.startDate === null || this.state.timeNoted === null) {
            this.resetCall(true)
        } else {
            let payload = {
                heading: this.state.title,
                hashtag: this.state.Hashtag,
                place: this.props.address,
                time: this.state.formattedDate + ' ' + '•' + ' ' + this.state.timeNoted
            }
            this.props.navigation.navigate('CreateEventStep2', { payloadPassed: payload })
        }
    }

    makingFormattedDate = (day, date, month) => {
        this.setState({
            formattedDate: day +', '+date + ' ' +month 
        })
    }

    callinAddress = () => {
        this.setState({ addressCall: true })
        this.props.navigation.navigate('AddressModal')
    }

    callingPicker = () => {
        this.setState({ callingPicker: true })
        this.props.navigation.navigate('PickerView')
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} bounces={false} >
                    <View style={styles.headerView}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle} activeOpacity={1} >
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
                                title='Title *'
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
                                title='Hashtag *'
                                value={this.state.Hashtag}
                                updateMasterState={this._updateMasterState}
                                style={styles.textInputStyle}
                                placeholderStyle={styles.placeholderStyle}
                                ref="Hashtag"
                                onSubmitEditing={this.onSubmitHashtag}
                            />
                        </View>
                        <View style={styles.textInputView} >
                            <TouchableOpacity style={styles.addressButton} onPress={this.callinAddress} >
                                <Text style={[styles.AddressStyle, { color: this.props.address === 'Address *' ? Colors.fadedGray : Colors.black }]}> {this.props.address} </Text>
                                {this.state.addressCall && <FloatingLabel style={{ position: 'absolute', left: 0, top: -10 }} title={'Address *'} goFrom={10} goTo={-28} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textInputView} >
                            <DatePicker
                                container={styles.dateTimePicker}
                                textStyle={[styles.dateText, { color: this.state.colorChangeDate ? Colors.black : Colors.fadedGray, }]}
                                mode={'date'}
                                updateMasterState={this._updateMasterState}
                                attrName={'startDate'}
                                title={'Event Date *'}
                                value={this.state.startDate}
                                makingFormattedDate={this.makingFormattedDate}
                            />
                        </View>
                        <View style={[styles.rowStyle, { marginTop: Platform.OS === 'ios' ? vw(20) : vw(0) }]} >
                            <DatePicker
                                container={[styles.dateTimePicker, { width: vw(180) }]}
                                textStyle={[styles.dateText2, { color: this.state.colorChangeTime ? Colors.black : Colors.fadedGray }]}
                                mode={'time'}
                                updateMasterState={this._updateMasterState}
                                attrName={'timeNoted'}
                                title={'Start Time *'}
                                value={this.state.timeNoted}
                            />
                            {
                                Platform.OS === 'ios'
                                    ? <TouchableOpacity style={[styles.dateTimePicker, { width: vw(170), justifyContent: 'flex-start' }]} onPress={() => this.callingPicker()} activeOpacity={1} >
                                        <Text style={[styles.durationSelect, { color: this.props.duration === 'Duration' ? Colors.fadedGray : Colors.black }]}> {this.props.duration} </Text>
                                        {this.state.callingPicker && <FloatingLabel style={{ position: 'absolute', right: -10, top: -90 }} title={'Duration'} goFrom={5} goTo={-5} />}
                                    </TouchableOpacity>
                                    : <PickerViewAndroid />
                            }
                        </View>
                    </View>

                </KeyboardAwareScrollView>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyle}  >
                    <TouchableOpacity
                        onPress={() => this.callAlert()}
                        activeOpacity={1}
                    >
                        <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
                    </TouchableOpacity>
                </LinearGradient>
                {this.state.call === true &&
                    <Toast top={-5} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
                }
            </View>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        DURATION_SELECTED: (value) => dispatch(DURATION_SELECTED(value))
    }
}

function mapStateToProps(state) {
    const { duration, address } = state.Reducer;
    return {
        duration,
        address
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEventStep1);