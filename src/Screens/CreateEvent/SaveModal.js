import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from './styles'
import strings from '../../Constants/Strings'

export default class SaveModal extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.pop()} style={styles.containerStyleModal}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{strings.saveModal}</Text>
                    <View style = {styles.buttonsViewStyle}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.pop()} activeOpacity = {1} style = {styles.yesContinueButtonStyle}>
                            <Text style = {styles.yesContinueTextStyle}> OK </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}
