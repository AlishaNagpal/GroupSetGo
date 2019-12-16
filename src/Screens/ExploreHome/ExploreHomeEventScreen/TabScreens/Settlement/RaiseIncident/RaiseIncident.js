import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../../../../../SkipLoginDialog/styles'
import { strings, Colors } from '../../../../../../Constants'


export default class RaiseIncident extends PureComponent {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{strings.RaiseIncedent}</Text>
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity activeOpacity={1} style={styles.yesContinueButtonStyle} onPress={() => this.props.navigation.navigate('HomeDetails6')} >
                            <Text style={[styles.yesContinueTextStyle, { color: Colors.fadedRed }]}> {strings.cancelIt} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RaiseReport')} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={[styles.loginTextStyle, { color: Colors.black }]}> {strings.Yes} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}