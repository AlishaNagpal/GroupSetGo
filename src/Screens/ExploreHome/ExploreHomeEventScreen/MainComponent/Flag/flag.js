import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from '../../../../SkipLoginDialog/styles'
import {strings, Colors} from '../../../../../Constants'

export default class flag extends PureComponent {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{strings.inappropriate}</Text>
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity activeOpacity={1} style={styles.yesContinueButtonStyle} onPress={() => this.props.navigation.navigate('HomeDetails6')} >
                            <Text style={[styles.yesContinueTextStyle, {color: Colors.fadedRed}]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FlagInappropriate')} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={[styles.loginTextStyle, {color: Colors.black}]}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
