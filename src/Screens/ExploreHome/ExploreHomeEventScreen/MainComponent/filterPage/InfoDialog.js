import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

/**
 * custom imports
 */
import { Images, Strings } from '../../../../../Constants';
import styles from './InfoStyle';

export default class InfoDialog extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>
                        {Strings.info1}{"\n\n"}{Strings.info2}{"\n\n"}{Strings.info3}{"\n\n"}{Strings.info4}{"\n\n"}{Strings.info5}{"\n"}
                    </Text>
                </TouchableOpacity>
                <Image source={Images.info} style={styles.infoIconView} />
            </TouchableOpacity>
        )
    }
}