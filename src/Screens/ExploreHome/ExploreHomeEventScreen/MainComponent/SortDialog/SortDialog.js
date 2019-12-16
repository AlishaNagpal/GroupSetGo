import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './styles';

export default class SortDialog extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity = {1} onPress = {()=>this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity = {1} style = {styles.dialogboxStyle}>
                    <Text style = {styles.alertTextStyle}>{Strings.sortBy}</Text>  
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {1} style={styles.listView}>
                    <Text style={styles.listText}>{Strings.distance}</Text>
                    <VectorIcons.MaterialCommunityIcons
                    name="swap-vertical"
                    size={vw(25)}
                    />
                    </TouchableOpacity>
                <TouchableOpacity activeOpacity = {1} style={styles.listView}>
                    <Text style={styles.listText}>{Strings.onlyBudget}</Text>
                    <VectorIcons.MaterialCommunityIcons
                    name="swap-vertical"
                    size={vw(25)}
                    />
                    </TouchableOpacity>
                <TouchableOpacity activeOpacity = {1} style={styles.listView}>
                    <Text style={styles.listText}>{Strings.perctFill}</Text>
                    <VectorIcons.MaterialCommunityIcons
                    name="swap-vertical"
                    size={vw(25)}
                    />
                    </TouchableOpacity>
                <TouchableOpacity activeOpacity = {1} style={styles.listView}>
                    <Text style={styles.listText}>{Strings.openSlots}</Text>
                    <VectorIcons.MaterialCommunityIcons
                    name="swap-vertical"
                    size={vw(25)}
                    />
                    </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const DATA = [
    {title: Strings.distance},
    {title: Strings.onlyBudget},
    {title: Strings.perctFill},
    {title: Strings.openSlots},
]