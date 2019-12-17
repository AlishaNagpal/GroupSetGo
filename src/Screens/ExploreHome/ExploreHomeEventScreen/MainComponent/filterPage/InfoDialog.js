import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { vw, vh, VectorIcons, Colors, Strings } from '../../../../../Constants';
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
                <View style={styles.infoIconView}>
                    <VectorIcons.Ionicons
                        name='ios-information'
                        color={Colors.white}
                        size={vh(80)}
                        style={styles.infoIcon}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}