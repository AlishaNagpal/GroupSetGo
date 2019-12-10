import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from '../../../../SkipLoginDialog/styles'
import {strings} from '../../../../../Constants'

export default class response extends PureComponent {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{strings.response}</Text>
                    <View style={[styles.buttonsViewStyle, {justifyContent:'center'}]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails6')} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
