import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { vw, VectorIcons, Strings } from '../../../../../Constants';
import styles from './styles';
import { Toast } from "../../../../../ReusableComponents";

export default class SortDialog extends PureComponent {
    state = { call: false }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogboxStyle} >
                    <Text style={styles.alertTextStyle}>{Strings.sortBy}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.listView} onPress={() => this.resetCall(true)} >
                    <Text style={styles.listText}>{Strings.distance}</Text>
                    <VectorIcons.MaterialCommunityIcons
                        name="swap-vertical"
                        size={vw(25)}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.listView} onPress={() => this.resetCall(true)} >
                    <Text style={styles.listText}>{Strings.onlyBudget}</Text>
                    <VectorIcons.MaterialCommunityIcons
                        name="swap-vertical"
                        size={vw(25)}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.listView} onPress={() => this.resetCall(true)} >
                    <Text style={styles.listText}>{Strings.perctFill}</Text>
                    <VectorIcons.MaterialCommunityIcons
                        name="swap-vertical"
                        size={vw(25)}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.listView} onPress={() => this.resetCall(true)} >
                    <Text style={styles.listText}>{Strings.openSlots}</Text>
                    <VectorIcons.MaterialCommunityIcons
                        name="swap-vertical"
                        size={vw(25)}
                    />
                </TouchableOpacity>
                {this.state.call === true &&
                    <Toast top={-30} from={30} to={-30} message={Strings.UnderWork} call={(value) => this.resetCall(value)} />
                }
            </TouchableOpacity>
        )
    }
}