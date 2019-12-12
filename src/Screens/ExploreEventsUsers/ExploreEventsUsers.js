import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { vh, Colors, VectorIcons } from '../../Constants'
import styles from './styles'
import TabNavigator from './TabNavigation/TabNavigator'
export default class ExploreEventsUsers extends PureComponent {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNavigator')} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
                    </TouchableOpacity>
                    <View style={styles.tabbarViewStyle}>
                        <TabNavigator />
                    </View>
                </View>
            </View>
        )
    }
}
