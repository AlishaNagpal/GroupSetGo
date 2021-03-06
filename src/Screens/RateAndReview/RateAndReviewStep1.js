import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Colors, VectorIcons, vh, strings, vw, Images, Strings } from '../../Constants'
import styles from './style'
import * as Progress from 'react-native-progress';
import { Stars, Toast } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
const colors2 = [Colors.veryVeryLightGray, Colors.whitishGray]

export default class RateAndReviewStep1 extends Component {
    state = {
        inputValue: '',
        valid: false,
        call: false,
        starRatings: false,
    }

    callAlert = () => {
        if (this.state.inputValue === '') {
            this.resetCall(true)
        } else if (this.state.inputValue !== '' && this.state.starRatings === true) {
            this.props.navigation.navigate('RateAndReviewStep2', { id: this.props.navigation.getParam('id') })
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    starRatingsValue = (value) => {
        this.setState({
            starRatings: value
        })
        if (this.state.inputValue !== '' && this.state.starRatings === true) {
            this.setState({
                valid: true
            })
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.backButtonStyle} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
                        <Text style={styles.headerText}>{Strings.RateReview}</Text>
                    </TouchableOpacity>
                    <View style={styles.skipView}>
                        <Text style={styles.skipText} onPress={() => this.props.navigation.navigate('RateAndReviewStep2', { id: this.props.navigation.getParam('id') })}>{Strings.SKIP}</Text>
                    </View>
                </View>
                <Text style={styles.stepText} > {strings.rateStep1} </Text>
                <Progress.Bar style={styles.progressBar} progress={this.state.valid ? 33 / 100 : 2 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />
                <View style={styles.bottomView} >
                    <Text style={styles.rateHost} > {strings.rateHost} </Text>
                    <Image source={Images.maleDefault} style={styles.maleImage} />
                    <View style={styles.starView} >
                        <Stars starRatings={(value) => this.starRatingsValue(value)} error={(value) => this.starRatingsError(value)} />
                    </View>
                    <View style={styles.experienceView} >
                        <Text style={styles.experienceText} > {strings.tellUs} </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Description'}
                        multiline={true}
                        value={this.state.inputValue}
                        onChangeText={(text) => {
                            this.setState({ inputValue: text })
                            if (this.state.inputValue !== '' && this.state.starRatings === true) {
                                this.setState({ valid: text })
                            }
                        }}
                    />
                </View>
                {this.state.call === true &&
                    <Toast top={-15} from={0} to={-60} message={strings.pleaseTellUs} call={(value) => this.resetCall(value)} />
                }
                <LinearGradient colors={this.state.valid ? colors : colors2} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyle}  >
                    <TouchableOpacity
                        onPress={() => this.callAlert()}
                        activeOpacity={1}
                        valid={this.state.valid}
                    >
                        <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={this.state.valid ? Colors.white : Colors.stars} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}
