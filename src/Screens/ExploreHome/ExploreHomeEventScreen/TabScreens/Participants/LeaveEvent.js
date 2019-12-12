import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../../../../SkipLoginDialog/styles'
import { strings, Colors } from '../../../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'

class LeaveEvent extends PureComponent {
    toggleJoining(id, value) {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
        if (index != -1) {
            this.props.Event_Data[index].joined = value
            this.props.eventDATA()
        }
        this.props.navigation.navigate('HomeNavigator')
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{strings.LeaveEvent}</Text>
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity activeOpacity={1} style={styles.yesContinueButtonStyle} onPress={() => this.props.navigation.navigate('HomeDetails6')} >
                            <Text style={[styles.yesContinueTextStyle, { color: Colors.fadedRed }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleJoining(this.props.navigation.getParam('id'), false)} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={[styles.loginTextStyle, { color: Colors.black }]}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        eventDATA: () => dispatch(eventDATA())
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
)(LeaveEvent);
