import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import styles from './style'
import strings from '../../Constants/Strings'

export default class RateAndReviewModal extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.goBack()} style={styles.containerStyleModal}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{strings.rate_review}</Text>
                    <View style = {styles.buttonsViewStyle}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.navigate("HomeDetails6",{id: this.props.navigation.getParam('id')})} activeOpacity = {1} style = {styles.yesContinueButtonStyle}>
                            <Text style = {styles.yesContinueTextStyle}> OK </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}
