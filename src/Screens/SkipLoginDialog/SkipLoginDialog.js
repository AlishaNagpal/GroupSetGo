import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from './styles'
import strings from '../../Constants/Strings' 

export default class SkipLoginDialog extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{strings.alertText}</Text>
                    <View style = {styles.buttonsViewStyle}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.navigate("HomeNavigator")} activeOpacity = {1} style = {styles.yesContinueButtonStyle}>
                            <Text style = {styles.yesContinueTextStyle}>Yes, Continue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>I'll Login</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}
