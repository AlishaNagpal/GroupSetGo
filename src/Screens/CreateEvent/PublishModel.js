import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../SkipLoginDialog/styles'
import { strings, Colors } from '../../Constants'
import { Share } from 'react-native';
import { connect } from 'react-redux'
import { DURATION_SELECTED, getAddress, saveCategoryData, makingAnEvent } from '../../Store/Action/Action'

class PublishModel extends PureComponent {

    callingShare = () => {
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
            // Android only:
            dialogTitle: 'Share BAM goodness',
            // iOS only:
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    callCopyURL = () => {
        this.props.makingAnEvent(this.props.navigation.getParam('payloadPassed'))
        this.props.DURATION_SELECTED('Duration')
        this.props.getAddress('Address *')
        this.props.saveCategoryData([])
        this.props.navigation.navigate("HomeNavigator")
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.pop()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{strings.publishedEvent1} {'Your Title'} {strings.publishedEvent2} </Text>
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity onPress={this.callingShare} activeOpacity={1} style={styles.yesContinueButtonStyle}>
                            <Text style={[styles.yesContinueTextStyle, { color: Colors.chatBlue }]}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.callCopyURL} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>Copy URL</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        DURATION_SELECTED: (value) => dispatch(DURATION_SELECTED(value)),
        getAddress: (value) => dispatch(getAddress(value)),
        saveCategoryData: (value) => dispatch(saveCategoryData(value)),
        makingAnEvent: (value) => dispatch(makingAnEvent(value))
    }
}

function mapStateToProps(state) {
    const { Event_Data } = state.Reducer;
    return {
        Event_Data
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublishModel);
