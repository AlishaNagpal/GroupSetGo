import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, VectorIcons, vh, strings, vw } from '../../Constants'
import styles from './style'
import * as Progress from 'react-native-progress';

export default class RateAndReviewStep1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails6')} style={styles.backButtonStyle}>
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
                        <Text style={styles.headerText} > {strings.RateReview} </Text>
                    </TouchableOpacity>
                    <View style={styles.skipView} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RateAndReviewStep2')} >
                            <Text style={styles.skipText} > {strings.SKIP} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.stepText} > {strings.rateStep1} </Text>
                <Progress.Bar style={styles.progressBar} progress={2 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />
                <View style={styles.bottomView} >
                    <Text style={styles.rateHost} > {strings.rateHost} </Text>
                    {/* <Image /> */}

                </View>

            </View>
        )
    }
}
