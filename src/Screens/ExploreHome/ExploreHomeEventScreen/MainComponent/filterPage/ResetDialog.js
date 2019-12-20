import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from './ResetStyle'
import strings from '../../../../../Constants/Strings' 

export default class ResetDialog extends PureComponent {
    goBackwards = () =>{
        this.props.navigation.state.params.onReset()
        console.log("this.props",this.props)
        this.props.navigation.goBack()
    }
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{strings.resetAll}</Text>
                    <View style = {styles.buttonsViewStyle}>
                        <TouchableOpacity onPress = {this.goBackwards} activeOpacity = {1} style = {styles.yesContinueButtonStyle}>
                            <Text style = {styles.yesContinueTextStyle}>{strings.resetall}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>{strings.cancelIt}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}
