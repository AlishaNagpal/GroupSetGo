import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './InfoStyle';

export default class InfoDialog extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{Strings.sortBy}</Text>  
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}