import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../SkipLoginDialog/styles'
import {strings, Colors} from '../../Constants'

export default class PublishModel extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.pop()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{strings.publishedEvent1} {'Your Title'} {strings.publishedEvent2} </Text>
                    <View style = {styles.buttonsViewStyle}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.navigate("HomeNavigator")} activeOpacity = {1} style = {styles.yesContinueButtonStyle}>
                            <Text style = {[styles.yesContinueTextStyle,{color:Colors.chatBlue}]}>Share</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeNavigator")} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>Copy URL</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}
